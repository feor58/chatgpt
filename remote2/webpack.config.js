const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/main.ts',
  mode: 'development',
  devServer: {
    port: 3002
  },
  output: {
    publicPath: 'auto'
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue']
  },
  module: {
    rules: [
      { test: /\.vue$/, loader: 'vue-loader' },
      { test: /\.ts$/, loader: 'ts-loader', options: { appendTsSuffixTo: [/\.vue$/] } },
      { test: /\.css$/, use: ['vue-style-loader', 'css-loader'] }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new ModuleFederationPlugin({
      name: 'remoteApp2',
      filename: 'remoteEntry.js',
      exposes: {
        './RemoteLabel': './src/RemoteLabel.vue'
      },
      shared: {
        vue: { singleton: true },
        'shared-lib': { singleton: true }
      }
    })
  ]
};
