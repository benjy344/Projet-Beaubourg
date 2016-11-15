module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: [{
          "expand": true,
          "cwd": "css/scss/",
          "src": ["*.scss"],
          "dest": "css/css/",
          "ext": ".css"
        }]
      }
    },
    concat: {
      options: {
        separator: ';', // permet d'ajouter un point-virgule entre chaque fichier concaténé.
      },
      dist: {
        src: ['src/intro.js', 'src/project.js', 'src/outro.js'], // la source
        dest: 'dist/built.js' // la destination finale
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'css/main.css': ['css/css/*.css', '!css/main.css']
        }
      }
    },
    sprite: {
      main: {
        src: [
        'assets/sprites/*.png'
        ],
        dest: 'assets/sprite-main.png',
        destCss: 'css/scss/sprite-main.scss',
        cssFormat: 'scss',
        cssVarMap: function (sprite) {
         sprite.name = 'icon-' + sprite.name;
       },
       algorithm   : 'binary-tree',
       padding     : 5
     }
   },
    // Observons…
      watch: {
        options: {
          livereload: true, // Activons le livereload du navigateur
        },
        src: {
          files: ['js/*.js', 'css/**/*.scss', '**/*.html'], // Les fichiers à observer…
          tasks: ['sass:dist', 'concat:dist', 'cssmin'], // … la commande à effectuer
        }
      }
  })
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-spritesmith');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('default', ['sass:dist', 'concat:dist', 'cssmin', 'sprite']);
  grunt.registerTask('spritesmith', ['sprite']);
}