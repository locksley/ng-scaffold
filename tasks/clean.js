module.exports = function(opts) {
  return {
    dist: {
      files: [{
        dot: true,
        src: [
          '.tmp',
          'dist/{,*/}*',
          '!dist/.git*'
        ]
      }]
    },
    server: '.tmp'
  }
}
