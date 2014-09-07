'use strict';

var fs = require("fs")

var opts = {
  livereload: 35729
}

module.exports = function(grunt) {

  // Grunt utils
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  // Load Config
  var tasks = fs.readdirSync("tasks");
  var configTasks = {}
  for (var i = 0; i < tasks.length; i++) {
    var taskKey = tasks[i].split(".")[0];
    configTasks[taskKey] = require("./tasks/" + tasks[i])(opts);
  };

  grunt.initConfig(configTasks);

  // CLI Tasks
  grunt.registerTask('serve', 'Compile then start a connect web server', function(target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'wiredep',
      'concurrent:server',
      'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('test', [
    'clean:server',
    'concurrent:test',
    'autoprefixer',
    'connect:test',
    'karma'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'wiredep',
    'useminPrepare',
    'concurrent:dist',
    'autoprefixer',
    'concat',
    'ngmin',
    'copy:dist',
    'cdnify',
    'cssmin',
    'uglify',
    'filerev',
    'usemin',
    'htmlmin'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);
};
