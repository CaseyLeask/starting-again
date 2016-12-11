var path = require('path');

module.exports = {
  entry: './server/index.js',
  output: {
    filename: './server/bundle.js'
  },
  target: 'node',
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
}
