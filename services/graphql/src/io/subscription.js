import { SubscriptionManager } from 'graphql-subscriptions';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import url from 'url';
import debug from 'debug';

import schema from '../schema';
import getModels from '../models';
import { tokenToObject } from '../lib/crypto';
import pubsub from './pubsub';
import { setupFunctions } from '../resolvers';

const log = debug('graphql:io:subscription');

let modelsGet = getModels;

const subscriptionManager = new SubscriptionManager({
  schema: schema(),
  pubsub,
  setupFunctions
});

let server = null;

if (__DEV__) {
  if (module.hot) {
    module.hot.accept('../models', () => {
      modelsGet = require('../models').default;
    });
  }
}

const onSubscribe = async (msg, params, req) => {
  const { User } = await modelsGet({});
  let user = null;
  try {
    const { query: { token = null } } = url.parse(req.url, true);
    if (token) {
      const { _id } = await tokenToObject(token);
      user = await User.getByID(_id);
      log(`user ${user.id} attempting to subscribe`);
    }
    log(`anonymous user attempting to subscribe`);
  } catch (e) {
    log(`anonymous user attempting to subscribe`);
  }
  return {
    ...params,
    context: {
      user,
      models: await modelsGet(user)
    }
  };
};

export default (httpServer) => {
  if (!server) {
    server = new SubscriptionServer({
      subscriptionManager,
      onSubscribe
    }, httpServer);
  }
};
