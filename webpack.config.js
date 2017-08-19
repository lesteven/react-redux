var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'dist')
  },
  devServer:{
    publicPath:'/',
    contentBase:'./public',
  	inline:true,
  	port:8080,
   
  },

  module: {
  loaders: [
    { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader", 
		
    query:{presets:['react','es2015']}},
    { test: /\.css$/, loader: "style-loader!css-loader" }
  ]
}, 
  plugins: [HtmlWebpackPluginConfig]
};