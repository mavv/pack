var webpack = require('webpack');
var CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: './src/app.entry.js'
  },
  output: {
    filename: './bundle/app.js'
  },
  debug: true,
  devtool: eval,
  // target: 'node',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      // {
      //   test: /\.less$/,
      //   loader: 'style-loader!css-loader!less-loader'
      // }, // use ! to chain loaders
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
        from: './src/src-index.html',
        to: './bundle/index.html'
      }
    ]),
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.json', '.less']
  }
};
