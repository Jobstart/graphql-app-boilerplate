const webpack = require('webpack');

module.exports = {
  webpack: (config) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.GRAPHQL_FQDN': JSON.stringify(process.env.GRAPHQL_FQDN),
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      })
    );
    return config;
  },
};
