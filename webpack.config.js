var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var config = {
    devtool: debug ? "inline-sourcemap" : null,
    entry: './dev/js/main.js',
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-0'],
                plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
            }
        }]
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    output: {
        path: __dirname + "/client/js",
        filename: "build.js",
        publicPath: './client/js'
    }
};
module.exports = config;