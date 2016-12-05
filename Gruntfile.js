module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: [{
          "expand": true,
          "cwd": "app/css/scss/",
          "src": ["*.scss"],
          "dest": "app/css/css/",
          "ext": ".css"
        }]
      }
    },
    concat: {
      options: {
        separator: ';', // permet d'ajouter un point-virgule entre chaque fichier concaténé.
      },
      dist: {
        src: ['app/js/*.js'], // la source
        dest: 'dist/js/built.js' // la destination finale
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'dist/css/main.css': ['app/css/css/*.css', '!css/main.css']
        }
      }
    },
    sprite: {
      main: {
        src: [
        'app/assets/sprites/*.png'
        ],
        dest: 'dist/assets/sprite-main.png',
        destCss: 'app/css/scss/utilities/_sprite-main.scss',
        cssFormat: 'scss',
        cssVarMap: function (sprite) {
         sprite.name = 'icon-' + sprite.name;
       },
       algorithm   : 'binary-tree',
       padding     : 5
     }
   },
    imagemin: {                          // Task 
      png: {
        options: {
          progressive: true,
          optimizationLevel: 7
        },
        files: [
          {
            // Set to true to enable the following options…
            expand: true,
            // cwd is 'current working directory'
            cwd: 'app/assets/',
            src: ['*.png'],
            // Could also match cwd line above. i.e. project-directory/img/
            dest: 'dist/assets/',
            ext: '.png'
          }
        ]
      },
      jpg: {
        options: {
          progressive: true,
          optimizationLevel: 7
        },
        files: [
          {
            // Set to true to enable the following options…
            expand: true,
            // cwd is 'current working directory'
            cwd: 'app/assets/',
            src: ['*.jpg'],
            // Could also match cwd. i.e. project-directory/img/
            dest: 'dist/assets/',
            ext: '.jpg'
          }
        ]
      }
    },
    // Observons…
    watch: {
      options: {
          livereload: true, // Activons le livereload du navigateur
        },
        src: {
          files: ['app/js/*.js', 'app/css/**/*.scss', 'app/views/**/*.html'], // Les fichiers à observer…
          tasks: ['sass:dist', 'concat:dist', 'cssmin'], // … la commande à effectuer
        }
      }
    })
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-spritesmith');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');



  grunt.registerTask('default', ['sprite','sass:dist', 'concat:dist', 'cssmin']);
  grunt.registerTask('spritesmith', ['sprite']);
  grunt.registerTask('minifyImg', ['imagemin:png']);

}