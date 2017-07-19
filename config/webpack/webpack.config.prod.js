const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const eslintFormatter = require('eslint-formatter-pretty');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const baseConfig = require('./webpack.config.base');
const merge = require('webpack-merge');

module.exports = merge.smart(baseConfig, {
  bail: true,

  entry: path.resolve(__dirname, '../../src'),

  output: {

    path: path.resolve(__dirname, '../../build'),

    filename: 'static/js/[name].[chunkhash:8].js',

    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',

    publicPath: '/',
  },

  module: {

    rules: [{
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, '../../src'),
        loader: require.resolve('babel-loader'),
        options: {
          compact: true,
        },
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          Object.assign({
            fallback: require.resolve('style-loader'),
            use: [{
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1,
                  minimize: true,
                  sourceMap: true,
                },
              },
              {
                loader: require.resolve('postcss-loader'),
                options: {
                  ident: 'postcss',
                  plugins: () => [
                    require('postcss-flexbugs-fixes'),
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
          })
        ),
      },
    ],
  },

  plugins: [

    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(__dirname, '../../public/index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        comparisons: false,
      },
      output: {
        comments: false,
        ascii_only: true,
      },
      sourceMap: true,
    }),
    new ExtractTextPlugin({
      filename: 'main.css',
    }),
  ],
});
