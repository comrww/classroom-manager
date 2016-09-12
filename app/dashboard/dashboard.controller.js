(function() {
    'use strict';

    angular
        .module('app')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['studentService', 'projectService', 'assignmentService'];

    /* @ngInject */
    function DashboardController(studentService, projectService, assignmentService) {
        var vm = this;
        vm.title = 'DashboardController';

        activate();

        ////////////////

        function activate() {
            studentService.getAll().then(
                function(students) {
                    vm.studentCount = students.length;
                }
            );
            projectService.getAll().then(
                function(projects) {
                    vm.projectCount = projects.length;
                }
            );
            assignmentService.getAll().then(
                function(assignments) {
                    vm.assignmentCount = assignments.length;
                }
            );
        }
    }
})();