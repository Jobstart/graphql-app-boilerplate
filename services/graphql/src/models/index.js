import Promise from 'bluebird';

import { createModels } from '../lib/model';

// Hook to make sure models are set up
const synced = Promise.resolve();

const ModelConstructors = {};

if (__DEV__) {
  if (module.hot) {
    const conformModelName = (modelName) => (modelName.charAt(0).toUpperCase() + modelName.slice(1)).replace(/^Model$/, '');

    Object.keys(ModelConstructors).map(modelName => {
      module.hot.accept(`./${conformModelName(modelName)}`, () => {
        ModelConstructors[modelName] = require(`./${conformModelName(modelName)}`).default;
      });
    })
  }
}

// Model getter waits for sync completion
const getModels = async (reqUser = {}) => {
  await synced; //make sure we are synced

  const models = createModels(ModelConstructors);

  return models;
};

export default getModels;
