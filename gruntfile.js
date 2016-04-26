module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    responsive_images: {
      options: {
        engine: 'im'
      },
      myTask: {
        options: {
          sizes: [{
            width: 320,
          },{
            width: 640,
          }, {
            width: 1024,
          }]
        },
        files: [{
          src: ['views/images/pizzeria.jpg'],
          dest: 'dist/'
        }]
      }
    },
    uglify : {
      options: {
        mangle: false,
        preserveComments: false
      },
      my_target: {
        files: {
          'dist/js/perfmatter.min.js' : ['js/perfmatters.js']
        }
      }
    },
    cssmin : {
      options: {
        shorthandCompacting: false
      },
      target: {
        files: {
          'dist/css/style.min.css': ['css/style.css', 'css/style-mobile.css', 'css/print.css']
        }
      }
    },
    jshint: {
      all: ['js/perfmatters.js']
    }
  });

  grunt.registerTask('default',[
    'responsive_images',
    'uglify',
    'cssmin',
    'jshint'
  ]);
};
