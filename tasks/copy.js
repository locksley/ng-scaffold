module.exports = function(opts) {
  return {
    dist: {
      files: [{
        expand: true,
        dot: true,
        cwd: 'app',
        dest: 'dist',
        src: [
          '*.{ico,png,txt}',
          '.htaccess',
          '*.html',
          'views/{,*/}*.html',
          'images/{,*/}*.{webp}',
          'fonts/*'
        ]
      }, {
        expand: true,
        cwd: '.tmp/images',
        dest: 'dist/images',
        src: ['generated/*']
      }]
    },
    styles: {
      expand: true,
      cwd: 'app/styles',
      dest: '.tmp/styles/',
      src: '{,*/}*.css'
    }
  }
}
