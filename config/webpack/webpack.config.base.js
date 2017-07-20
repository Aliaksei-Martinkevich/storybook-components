const path = require('path');
const eslintFormatter = require('eslint-formatter-pretty');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

module.exports = {
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx'],
  },

  module: {
    strictExportPresence: true,
    rules: [{
      test: /\.(js|jsx)$/,
      enforce: 'pre',
      use: [{
        options: {
          formatter: eslintFormatter,

        },
        loader: require.resolve('eslint-loader'),
      }],
      include: path.join(__dirname, '../../src'),
    },
    {
      exclude: [
        /\.scss/,
        /\.sass/,
        /\.html$/,
        /\.(js|jsx)$/,
        /\.css$/,
        /\.json$/,
        /\.bmp$/,
        /\.gif$/,
        /\.jpe?g$/,
        /\.png$/,
      ],
      loader: require.resolve('file-loader'),
      options: {
        name: 'static/media/[name].[hash:8].[ext]',
      },
    },
    {
      test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
      loader: require.resolve('url-loader'),
      options: {
        limit: 10000,
        name: 'static/media/[name].[hash:8].[ext]',
      },
    },
    ],
  },

  plugins: [
    new CaseSensitivePathsPlugin(),
  ],
};
