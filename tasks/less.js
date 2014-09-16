module.exports = function(opts) {
	return {
		development: {
			options: {
				paths: ["app/styles"],
				sourceMap: false
			},
			files: {
				".tmp/styles/application.css": "app/styles/application.less"
			}
		},
		production: {
			options: {
				paths: ["app/styles"],
				cleancss: true
			},
			files: {
				"dist/styles/application.css": "app/styles/application.less"
			}
		}
	}
}
