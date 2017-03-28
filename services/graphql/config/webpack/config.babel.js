import webpack from 'webpack';
import childProcess from 'child_process';
import nodeExternals from 'webpack-node-externals';

import banner from './banner';

const config = {
  target: 'node',
  cache: false,
  context: __dirname,
  devtool: 'source-map',
  entry: [
    'babel-polyfill',
    '../../src/index'
  ],
  output: {
    path: `${process.cwd()}/dist`,
    filename: 'index.js'
  },
  plugins: [
    new webpack.BannerPlugin({banner, raw: true, entryOnly: false })
  ],
  module: {
    loaders: [{
      test: /\.json$/,
      loader: 'json-loader'
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'raw-loader'
    }],
    noParse: /\.min\.js/
  },
  externals: [
    nodeExternals({
      whitelist: [
        'webpack/hot/poll?1000'
      ]
    })
  ],
  node: {
    __dirname: true
  }
};

export default config;
module.exports = config; //needed for webpack (uses commonjs require)
