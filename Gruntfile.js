module.exports = function(grunt) {
 
  grunt.registerTask('watch', [ 'watch' ]);
 
  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 9000,
          hostname: 'localhost',
          livereload: 35729,
          open: true,
          base: 'public'
        }
      }
    },
    concat: {
      js: {
        options: {
          separator: ';'
        },
        src: [
          'javascript/*.js'
        ],
        dest: 'public/js/main.min.js'
      },
    },
    uglify: {
      options: {
        mangle: false
      },
      js: {
        files: {
          'public/js/main.min.js': ['public/js/main.min.js']
        }
      }
    },
    less: {
      style: {
        files: {
          "public/css/style.css": "less/style.less",
          "public/css/pcss-dialog.css": "less/pcss-dialog.less"
        }
      }
    },
    autoprefixer: {
        dist: {
            files: {
                'public/css/style.css': 'public/css/style.css'
            }
        }
    },
    watch: {
      options: {
        livereload: 35729
      },
      js: {
        files: ['javascript/*.js'],
        tasks: ['concat:js', 'uglify:js'],
        options: {
          livereload: true,
        }
      },
      css: {
        files: ['less/*.less'],
        tasks: ['less:style', 'autoprefixer'],
        options: {
          livereload: true,
        }
      },
      html: {
        files: ['public/*.html'],
        options: {
          livereload: true,
        }
      }
    }
  });
 
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('serve', "Serve your app", [ 'connect:server', 'watch' ]);
};
