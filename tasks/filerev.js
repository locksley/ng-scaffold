// Static asset revisioning through file content hash

module.exports = function(opts) {
  return {
    dist: {
      src: [
        'dist/scripts/{,*/}*.js',
        'dist/styles/{,*/}*.css',
        'dist/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
        'dist/styles/fonts/*'
      ]
    }
  }
}
