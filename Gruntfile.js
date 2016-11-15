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
    // Observons…
      watch: {
        options: {
          livereload: true, // Activons le livereload du navigateur
        },
        src: {
          files: ['js/*.js', 'css/**/*.scss', '**/*.html'], // Les fichiers à observer…
          tasks: ['default'], // … la commande à effectuer
        }
      }
  })
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('default', ['sass:dist', 'concat:dist', 'cssmin']) // ici même.
}