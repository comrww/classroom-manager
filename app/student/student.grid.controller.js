(function() {
    'use strict';

    angular
        .module('app')
        .controller('StudentGridController', StudentGridController);

    StudentGridController.$inject = ['studentService', 'projectService'];

    /* @ngInject */
    function StudentGridController(studentService, projectService) {
        var vm = this;
        vm.title = 'StudentGridController';

        activate();

        ////////////////

        function activate() {
            studentService.getAll().then(
                function(students) {
                    vm.students = students;
                }
            );
        }

        // function delete(student) {
        //     studentService.remove().then(
        //         function(students) {
        //             vm.students = students;
        //         }
        //     );
        // }
    }
})();
