const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
const baseConfig = require('./webpack.config.base');
const merge = require('webpack-merge');

process.env.NODE_ENV = 'production';

module.exports = merge(baseConfig, {

  entry: [
    require.resolve('webpack/hot/dev-server'),
    require.resolve('react-error-overlay'),
    path.resolve(__dirname, '../../src'),
  ],

  output: {
    path: path.resolve(__dirname, '../../build'),
    pathinfo: true,
    filename: 'static/js/bundle.js',
    chunkFilename: 'static/js/[name].chunk.js',
    publicPath: '/',
    devtoolModuleFilenameTemplate: info =>
      path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
  },

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      include: path.resolve(__dirname, '../../src'),
      loader: require.resolve('babel-loader'),
    },
    {
      test: /\.sass$/,
      include: path.resolve(__dirname, '../../src'),
      loaders: ['style-loader', 'css-loader', 'sass-loader'],
    },
    {
      test: /\.scss$/,
      include: path.resolve(__dirname, '../../src'),
      loaders: ['style-loader', 'css-loader', 'sass-loader'],
    },
    {
      test: /\.css$/,
      use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss',
              plugins: () => [
                postcssFlexbugsFixes,
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9',
                  ],
                  flexbox: 'no-2009',
                }),
              ],
            },
          },
        ],
    },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, '../../public/index.html'),
    }),

    new webpack.NamedModulesPlugin(),

    new webpack.HotModuleReplacementPlugin(),
  ],

  performance: {
    hints: false,
  },

  devtool: 'cheap-module-source-map',
});
