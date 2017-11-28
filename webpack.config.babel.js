import webpack from 'webpack';
import path from 'path';

export default {
	entry: {
		main: './src/webpack/js/main.js'
	},

	output: {
		path: path.resolve(__dirname, './public/js'),
		filename: '[name].bundle.js'
	},

	resolve: {
		extensions: ['.js', '.pug', '.scss', '.sass']
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				use: [{
					loader: "babel-loader"
				}]
			},
			{
				test: /\.pug$/,
				use: [{
					loader: "pug-loader"
				}]
			},{
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        },{
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }]
      }
		]
	},

	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin()
	]
}
