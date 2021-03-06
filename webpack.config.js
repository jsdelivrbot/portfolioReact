var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var srcPath = path.join(__dirname,"src");
var builPath = path.join(__dirname,"/public");

module.exports = {
  //show for dev
  devtool:"eval",
  entry:path.join(srcPath,"index.js"),
  //end
  //* hide for dev
  // devtool:"inline-source-map",
  // entry:[
  //   'webpack-dev-server/client?/',
  //   'webpack/hot/only-dev-server',
  //   './src'
  // ],
  //end
  output:{
    path:builPath,
    filename:'./src/bundle.js',
    //hide for dev
    // publicPath:'/public/'
    //end
  },
  resolve:{
    moduleDirectories:['node_modules','src'],
    extensions:['','.js']
  },
  module:{
    loaders:[
      {
      test:/\.jsx?$/,
      exclude: /node_modules/,
      loader:'babel-loader'
    },
    {
      test:/\.css$/, loader:'style!css'
    },
    {
      test:/\.scss$/, loader: ExtractTextPlugin.extract('css!sass')
    },
    { test: /\.(jpg|png)$/, loader: 'file-loader' },
    { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
    { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"
    }

  ]
  },
  tyles: {
    "mixins": true,

    "core": true,
    "icons": true,

    "larger": true,
    "path": true,
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("style.css")
  ]
};
