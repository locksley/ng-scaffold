module.exports = function(opts) {
  return {
    dist: {
      files: [{
        expand: true,
        cwd: '.tmp/concat/scripts',
        src: '*.js',
        dest: '.tmp/concat/scripts'
      }]
    }
  }
}
