const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/main.ts',
  mode: 'development',
  devServer: {
    port: 3000
  },
  output: {
    publicPath: 'auto'
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue']
  },
  module: {
    rules: [
      {
        test: /\.vue$/, loader: 'vue-loader'
      },
      {
        test: /\.ts$/, loader: 'ts-loader', options: { appendTsSuffixTo: [/\.vue$/] }
      },
      {
        test: /\.css$/, use: ['vue-style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        remoteApp: 'remoteApp@http://localhost:3001/remoteEntry.js',
        remoteApp2: 'remoteApp2@http://localhost:3002/remoteEntry.js'
      },
      shared: {
        vue: { singleton: true },
        'shared-lib': { singleton: true }
      }
    })
  ]
};
