const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const commonConfigs = require('./webpack.common')
const ModuleFederation =  require('webpack/lib/container/ModuleFederationPlugin')
const PK = require('../package.json')

const devConfigs = {
   mode: 'development',
   devServer: {
       port: 8081,
       historyApiFallback: {
           index: 'index.html'
       }
   },
   plugins: [
       new ModuleFederation(
           {
               name: 'marketing',
               filename: 'remoteEntry.js',
               exposes: {
                   './MarketingApp' :'./src/bootstrap'
               },
               shared: PK.dependencies
           }
       ),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
   ] 
}

module.exports = merge(commonConfigs,devConfigs)