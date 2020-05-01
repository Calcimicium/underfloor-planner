import path from 'path'
import webpack from 'webpack'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import * as paths from './paths'

// Delete the TS_NODE_PROJECT variable to prevent the
// tsconfig-paths-webpack-plugin using the ts-node config file.
delete process.env.TS_NODE_PROJECT

const tsconfigFile = path.resolve(__dirname, 'tsconfig.json')

const config: webpack.Configuration = {
	context: paths.srcDir,
	devServer: {
		contentBase: paths.publicDir,
		watchContentBase: true
	},
	devtool: 'source-map',
	entry: './UnderfloorPlanner.ts',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				options: {
					configFile: tsconfigFile
				}
			}
		]
	},
	output: {
		filename: 'UnderfloorPlanner.js',
		library: 'UnderfloorPlanner',
		libraryExport: 'default',
		libraryTarget: 'umd',
		path: paths.distDir,
		publicPath: '/',
		umdNamedDefine: true
	},
	resolve: {
		extensions: ['.js', '.ts'],
		plugins: [
			new TsconfigPathsPlugin({
				configFile: tsconfigFile
			})
		],
	}
}

export default config
