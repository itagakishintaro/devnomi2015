'use strict';

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    connect: {
      options: {
        port: 9999,
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: 'http://localhost:9999/src/devnomi-2015Test.html?coverage=true'
        }
      }
    },
    watch: {
      update: {
        files: ['src/devnomi-2015.js'],
        tasks: ['newer:jshint:all']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: ['src/**/*']
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        force: true,
        reporter: require('jshint-junit-reporter'),
        reporterOutput: "report/jshint-junit-output.xml"
      },
      all: [
        'src/poker-core.js'
      ]
    }
  });

  grunt.registerTask('default', [
    'jshint:all',
    'connect:livereload',
    'watch'
  ]);

};
