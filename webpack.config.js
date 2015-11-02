
module.exports = {
  entry: './src/app.entry.js',
  output: {
    filename: './bundle/app.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
    ]
  },
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.json', '.less']
  }
};




















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
