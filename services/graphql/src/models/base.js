export default class BaseModel {
  constructor () {
    this.models = {};
  }
  // Used by https://github.com/thebigredgeek/apollo-resolvers
  dispose () {
    this.models = {}; // reset the hash to release references and allow garbage collection
  }
  injectPeerModels (models = {}) {
    this.models = models;
  }
}
