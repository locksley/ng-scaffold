module.exports = function(opts) {
  return {
    bower: {
      files: ['bower.json'],
      tasks: ['wiredep']
    },
    js: {
      files: ['app/scripts/**/*.js'],
      // tasks: ['newer:jshint:all'],
      options: {
        livereload: opts.livereload
      }
    },
    jsTest: {
      files: ['test/spec/{,*/}*.js'],
      // tasks: ['newer:jshint:test', 'karma']
    },
    less: {
      files: ['app/styles/**/*.less'],
      tasks: ['less:development', 'autoprefixer']
    },
    gruntfile: {
      files: ['Gruntfile.js']
    },
    livereload: {
      options: {
        livereload: opts.livereload
      },
      files: [
        'app/**/*.html',
        '.tmp/styles/**/*.css',
        'app/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
      ]
    }
  }
}
