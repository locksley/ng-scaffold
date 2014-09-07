module.exports = function(opts) {
  return {
    options: {
      cwd: 'app'
    },
    app: {
      src: ['app/index.html'],
      ignorePath: /\.\.\//,
      fileTypes: {
        html: {
          replace: {
            js: '<script src="/{{filePath}}"></script>',
            css: '<link rel="stylesheet" href="/{{filePath}}" />'
          }
        }
      },

      // Bootstrap JS
      overrides: {
        "bootstrap": {
          "main": [
            // "js/affix.js",
            "js/alert.js",
            // "js/button.js",
            // "js/carousel.js",
            // "js/collapse.js",
            // "js/dropdown.js",
            "js/tab.js",
            // "js/transition.js",
            // "js/scrollspy.js",
            // "js/modal.js",
            "js/tooltip.js",
            "js/popover.js"
          ]
        }
      }
    }
  }
}
