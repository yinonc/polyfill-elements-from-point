const path = require('path')

module.exports = {
	entry: path.resolve(__dirname, 'temp/index.js'),
	output: {
        libraryTarget: 'umd',
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js'
	}
}


