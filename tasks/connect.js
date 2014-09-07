var modRewrite = require('connect-modrewrite');

module.exports = function(opts) {
	return {
		options: {
			port: 9000,
			// Change this to '0.0.0.0' to access the server from outside.
			hostname: 'localhost',
			livereload: opts.livereload
		},
		livereload: {
			options: {
				open: true,
				middleware: function(connect) {
					return [
						modRewrite(['^[^\\.]*$ /index.html [L]']),
						connect.static('.tmp'),
						connect().use(
							'/bower_components',
							connect.static('./bower_components')
						),
						connect.static('app')
					];
				}
			}
		},
		test: {
			options: {
				port: 9001,
				middleware: function(connect) {
					return [
						modRewrite(['^[^\\.]*$ /index.html [L]']),
						connect.static('.tmp'),
						connect.static('test'),
						connect().use(
							'/bower_components',
							connect.static('./bower_components')
						),
						connect.static('app')
					];
				}
			}
		},
		dist: {
			options: {
				open: true,
				base: 'dist'
			}
		}
	}
}
