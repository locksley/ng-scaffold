module.exports = function(opts) {
  return {
    dist: {
      options: {
        prefix: '/',
        module: 'scaffoldApp',
        usemin: '/scripts/compiled.js',
        htmlmin: {
          collapseBooleanAttributes: false,
          collapseWhitespace: true,
          removeAttributeQuotes: false,
          removeComments: true,
          removeEmptyAttributes: false,
          removeRedundantAttributes: false,
          removeScriptTypeAttributes: false,
          removeStyleLinkTypeAttributes: false
        }
      },
      cwd: 'app',
      src: 'views/**/*.html',
      dest: 'dist/scripts/templates.js'
    }
  }
}
