const autoprefixer = require('autoprefixer'); 
const path = require('path'); 
const webpack = require('webpack'); 
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const ExtractTextPlugin = require('extract-text-webpack-plugin'); 
const eslintFormatter = require('react-dev-utils/eslintFormatter'); 

module.exports = { 
  bail: true, 
  
  entry: path.resolve(__dirname, './src'), 
  
  output: { 

    path: path.resolve(__dirname, './build'), 

    filename: 'static/js/[name].[chunkhash:8].js', 

    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js', 
   
    publicPath: '/', 
  }, 

  resolve: { 
    modules: ['node_modules'],
    
    extensions: ['.js', '.jsx'], 
  }, 

  module: { 
    strictExportPresence: true, 
    rules: [ 
      { 
        test: /\.(js|jsx)$/, 
        enforce: 'pre', 
        use: [ 
          { 
            options: { 
              formatter: eslintFormatter, 
               
            }, 
            loader: require.resolve('eslint-loader'), 
          }, 
        ], 
        include: path.join(__dirname, './src'), 
      }, 
      { 
        exclude: [ 
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
      { 
        test: /\.(js|jsx)$/, 
        include: path.join(__dirname, './src'), 
        loader: require.resolve('babel-loader'), 
        options: { 
          compact: true, 
        }, 
      }, 
      { 
        test: /\.css$/, 
        loader: ExtractTextPlugin.extract( 
          Object.assign( 
            { 
              fallback: require.resolve('style-loader'), 
              use: [ 
                { 
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
            } 
          ) 
        ), 
      }, 
    ], 
  }, 
  plugins: [ 
    // Generates an `index.html` file with the <script> injected. 
    new HtmlWebpackPlugin({ 
      inject: true, 
      template: path.join(__dirname, './public/index.html'),
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
  node: { 
    dgram: 'empty', 
    fs: 'empty', 
    net: 'empty', 
    tls: 'empty', 
  }, 
}; 