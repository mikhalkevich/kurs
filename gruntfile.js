// Обязательная обёртка
module.exports = function(grunt) {

    // Задачи
    grunt.initConfig({
        // Склеиваем
        concat: {
            main: {
                src: [
                    'public/javascripts/**/*.js'  // Все JS-файлы в папке
                ],
                dest: 'public/javascripts/gruntscripts.js'
            }
        },
    });

    // Загрузка плагинов, установленных с помощью npm install
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Задача по умолчанию
    grunt.registerTask('default', ['concat']);
};