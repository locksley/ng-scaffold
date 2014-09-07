module.exports = function(opts) {
  return {
    html: ['dist/**/*.html'],
    css: ['dist/styles/**/*.css'],
    options: {
      assetsDirs: ['dist', 'dist/images']
    }
  }
}
