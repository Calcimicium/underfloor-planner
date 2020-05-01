import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import config from './webpack.config'
import * as paths from './paths'

if (!config.plugins) config.plugins = []
config.plugins.push(
	new HtmlWebpackPlugin({
		inject: "head",
		template: path.join(paths.publicDir, 'index.html'),
		xhtml: true
	})
)

export default config
