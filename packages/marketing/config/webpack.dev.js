const { merge } = require('webpack-merge');
const ModuleFedarationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const HTMLWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const devConfig = {
    mode: 'development',
    devServer: {
        port: 8081,
        historyApiFallback: true
    },
    plugins: [
        new ModuleFedarationPlugin({
            name:"marketing",
            filename:"remoteEntry.js",
            exposes:{
                "./MarketingApp":'./src/bootstrap'
            },
            shared: packageJson.dependencies
        }),
            new HTMLWebpackPlugin({
                template: './public/index.html'
            })
        ],
};

module.exports = merge(commonConfig, devConfig);
