module.exports = function(opts) {
  return {
    server: [
      'less:development'
    ],
    test: [
      'less:development'
    ],
    dist: [
      'less:production',
      'imagemin',
      'svgmin'
    ]
  }
}
