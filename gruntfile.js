// ������������ ������
module.exports = function(grunt) {

    // ������
    grunt.initConfig({
        // ���������
        concat: {
            main: {
                src: [
                    'public/javascripts/**/*.js'  // ��� JS-����� � �����
                ],
                dest: 'public/javascripts/gruntscripts.js'
            }
        },
    });

    // �������� ��������, ������������� � ������� npm install
    grunt.loadNpmTasks('grunt-contrib-concat');

    // ������ �� ���������
    grunt.registerTask('default', ['concat']);
};