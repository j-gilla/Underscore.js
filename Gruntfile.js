module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['spec/**/*.js']
      }
    },
    watch: {
      files: ['*.js', 'spec/*.js'],
      tasks: ['mochaTest']
    }
  });
  grunt.registerTask('default', ['mochaTest']);
};
