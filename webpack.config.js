const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

// const commonLoaders = require('./webpack/common-loaders');
const images  = require('./webpack/images');


module.exports = merge([{
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
    module: {
        loaders: [
            {
            test: /\.js$/,
            loaders: ['react-hot', 'babel'],
            include: path.join(__dirname, 'src')
        },
        {
            test: /\.(jpg|png|svg)$/,
            loader: 'file-loader',
            options: {
                name: 'images/[name].[ext]',
                path: path.join(__dirname, 'src')
            }
        },
        {
            test: [/\.scss$/, /\.sass$/],
            loaders: [
                'style-loader',
                'css-loader',
                'sass-loader'

            ],
            include: path.join(__dirname, 'src')
        },
        {
            test: /\.json$/,
            loader: 'json-loader'
        }
        ]
    }

},
    // commonLoaders(),
    images()
]);
