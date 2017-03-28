import Promise from 'bluebird';
import jwt from 'jsonwebtoken';

import {
  JWT_SECRET
} from '../../config/environment';

export const objectToToken = (obj = {}) => new Promise((resolve, reject) => (
  jwt.sign(obj, JWT_SECRET, {}, (err, token) => err ? reject(err) : resolve(token))
));

export const tokenToObject = (token) => new Promise((resolve, reject) => (
  jwt.verify(token, JWT_SECRET, (err, obj) => err ? reject(err) : resolve(obj))
));
