export const createModels = ModelConstructors => {
  Object.keys(ModelConstructors).reduce((hash, key) => ({
    ...hash,
    [key.replace('Model', '')]: new ModelConstructors[key](reqUser)
  }), {});

  Object.keys(models).map((key) => {
    const otherModels = Object.keys(models)
      .filter((k) => k !== key)
      .reduce((hash, key) => ({
        ...hash,
        [key]: models[key]
      }), {});

    models[key].injectPeerModels(otherModels);
  });

  return models;
};
