module.exports = function(opts) {
  return {
    html: 'app/index.html',
    options: {
      dest: 'dist',
      flow: {
        html: {
          steps: {
            js: ['concat', 'uglifyjs'],
            css: ['cssmin']
          },
          post: {}
        }
      }
    }
  }
}
