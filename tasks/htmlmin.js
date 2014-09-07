module.exports = function(opts) {
  return {
    dist: {
      options: {
        collapseWhitespace: true,
        conservativeCollapse: true,
        collapseBooleanAttributes: false,
        removeCommentsFromCDATA: false,
        removeOptionalTags: true
      },
      files: [{
        expand: true,
        cwd: 'dist',
        src: ['*.html', 'views/{,*/}*.html'],
        dest: 'dist'
      }]
    }
  }
}
