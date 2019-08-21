const path = require('path');
const webpack = require('webpack');
const devServer = require('webpack-dev-server');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.ts',
	
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, './dist')
	},
	
	devServer: {
		hot: true,
		host: 'localhost',
		port: '8088',
		contentBase: 'dist'
	},
	
	module: {
		rules: [{
			test: /\.m?js$/,
			exclude: /node_modules/,
			use: [{
				loader: 'babel-loader'
			}]
		}, {
			test: /\.ts$/,
			exclude: /node_modules/,
			use: [{
				loader: 'ts-loader'
			}]
		}]
	},
	
	plugins: [
		new HtmlWebpackPlugin({
			title: '标题哦',
			filename: 'index.html'
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	]
}