import webpack from 'webpack';

import base from './config.babel';
import banner from './banner';

import { HOSTNAME, WEBPACK_PORT } from '../environment';

const config = {
  ...base,
  cache: true,
  entry: [
    'webpack/hot/poll?1000',
    ...base.entry
  ],
  output: {
    ...base.output,
    publicPath: `http://${HOSTNAME}:${WEBPACK_PORT}`
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new webpack.BannerPlugin({banner, raw: true, entryOnly: false })
  ]
};

export default config;
module.exports = config; //needed for webpack (uses commonjs require)
