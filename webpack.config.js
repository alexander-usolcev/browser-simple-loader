'use strict';

const NODE_ENV = process.env.NODE_ENV || 'production';
const webpack = require('webpack');
const path = require('path');

const isDev = NODE_ENV === 'development';


module.exports = {
    context: path.join(__dirname, 'source'),

    entry: {
        // 'browser-simple-loader': './browser-simple-loader.js',
        'test': '../test/test.js'
    },

    output: {
        path: path.join(__dirname + '/build'),
        filename: '[name].js',
        publicPath: '/'
    },

    plugins: [

    ],

    devtool: isDev ? 'eval-source-map' : false,

    resolve: {
        extensions: ['.js'],
        unsafeCache: true
    },

    resolveLoader: {
        modules: ['node_modules'],
        extensions: ['.js']
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            }
        ],

        noParse: [/bower_components/]
    }
};