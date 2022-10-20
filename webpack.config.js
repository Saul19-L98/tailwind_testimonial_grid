const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	mode: 'production',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname,'dist'),
		filename:'bundle.js',
	},
	devServer: {
		watchFiles: ["src/**/*"],
		port: 3000,
		open: true,
		hot: true,
		compress: true,
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				include: path.resolve(__dirname, 'src'),
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
			{
				test: /\.(png|svg|jpg|gif)$/i,
				type: "asset/resource",
				generator:{
					filename:"assets/img/[hash][ext]"
				}
			},
			{
				test: /\.(woff|woff2|eot|ttf)$/i,
				type: "asset/resource",
				generator: {
					filename: "assets/fonts/[hash][ext][query]"
				}
			}
		],
	},
	plugins:[
		new HtmlWebpackPlugin({
			inject: true,
			template: './public/index.html',
			filename: './index.html',
		})
	]
}
