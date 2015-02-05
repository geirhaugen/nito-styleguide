module.exports = function(grunt) {
    require('jit-grunt')(grunt);

    grunt.initConfig({
        less: {
          development: {
            options: {
              compress: false,
              yuicompress: false,
              optimization: 2
            },
            files: {
              "build/css/screen.css": "less/screen.less", // destination file and source file
              "build/css/styleguide.css": "less/styleguide.less"
            }
          }
        },
        watch: {
          styles: {
            files: ['less/**/*.less', 'ejs/**/*.ejs'], // which files to watch
            tasks: ['less', 'ejs:all', 'notify:less'],
            options: {
              nospawn: true
            }
          }
        },
        notify: {
            less:{
                options:{
                    title: "CSS Files built",
                    message: "Less task complete"
                }
            }
        },
        ejs: {
            all: {
                src: ['ejs/*.ejs'],
                //cwd: 'ejs/*.html',
                dest: 'build/',
                expand: true,
                ext: '.html',
                options:{
                    "title" : "testtittel",
                    "modules" : [
                        '_content/header',
                        "_content/typography",
                        "_content/grid",
                        "_content/buttons",
                        "_content/colors",
                        "_content/article",
                        "_content/course",
                        "_content/frontpageNews",
                        "_content/mainFooter"
                    ]
                }
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-ejs-locals');


    
    grunt.registerTask('default', ['less', 'ejs:all', 'notify:less', 'watch']);
};