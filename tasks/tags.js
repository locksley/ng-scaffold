module.exports = function(opts) {
  return {
    build: {
      options: {
        scriptTemplate: '<script src="/{{ path }}"></script>',
        openTag: '<!-- tag:js start -->',
        closeTag: '<!-- tag:js end -->'
      },
      src: [
        'app/scripts/**/*.js',
      ],
      dest: 'app/index.html'
    }
  }
}
