var webpack = require('webpack');
var CopyPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  entry: {
    app: [
        './src/less/app.less',
        './src/app.entry.js'
    ]
  },
  output: {
    path: 'bundle',
    filename: '[name].js',
  },
  debug: true,
  devtool: 'source-map',
  // target: 'node',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: 'bundle'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
      }, // use ! to chain loaders
      // {
      //   test: /\.css$/,
      //   loader: 'style-loader!css-loader'
      // },
      // {
      //   test: /\.(png|jpg)$/,
      //   loader: 'url-loader?limit=8192'
      // } // inline base64 URLs for <=8k images, direct URLs for the rest
    ]
  },
  plugins: [
    new CopyPlugin([
      {
        from: './src/img',
        to: 'img'
      }
    ]),
    new HtmlWebpackPlugin({
      title: '@play',
      template: './src/src-index.html',
      filename: 'index.html'
    }),
    new ExtractTextPlugin("css/app.css"),
    new webpack.optimize.CommonsChunkPlugin({
        children: true,
        minChunks: Infinity
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.json', '.less']
  }
};
