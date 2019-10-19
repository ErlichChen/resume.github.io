module.exports = [{
	entry: ['./styles/main.css', './scripts/main.js'],
	output: {
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'bundle.css'
						},
					},
					{ loader: 'extract-loader' },
          { loader: 'css-loader' },
				]
			},
			{
				test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
          plugins: ['transform-object-assign']
        }
			}
		]
	}
}]