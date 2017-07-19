
const autoprefixer = require('autoprefixer'); 
const path = require('path'); 
const webpack = require('webpack');
const eslintFormatter = require('eslint-formatter-pretty');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin'); 

module.exports = {

    context: __dirname,

    entry: [
        require.resolve('webpack/hot/dev-server'),
        require.resolve('react-error-overlay'),
        "./src/index.js",
    ],

    output: {
        path: path.resolve(__dirname, './build'),
        pathinfo: true,
        filename: 'static/js/bundle.js',
        chunkFilename: 'static/js/[name].chunk.js',
        publicPath: '/',
        devtoolModuleFilenameTemplate: info =>
            path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
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
                }, ],
                include: path.resolve(__dirname, './src'),
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
                include: path.resolve(__dirname, './src'),
                loader: require.resolve('babel-loader'),
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
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve(__dirname, 'public/index.html'),
        }),

        new webpack.NamedModulesPlugin(),

        new webpack.HotModuleReplacementPlugin(),

        new CaseSensitivePathsPlugin(),
    ],

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

    performance: {
        hints: false,
    },

    devtool: 'cheap-module-source-map',
};