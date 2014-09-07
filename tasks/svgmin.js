module.exports = function(opts) {
  return {
    dist: {
      files: [{
        expand: true,
        cwd: 'app/images',
        src: '{,*/}*.svg',
        dest: 'dist/images'
      }]
    }
  }
}
