(function() {
  'use strict';

  angular
    .module('app')
    .controller('StudentDetailController', StudentDetailController);

  StudentDetailController.$inject = ['studentService', 'projectService', 'assignmentService', '$stateParams', '$state'];

  /* @ngInject */
  function StudentDetailController(studentService, projectService, assignmentService, $stateParams, $state) {
    var vm = this;
    vm.assignProject = assignProject;
    vm.save = save;

    activate();

    ////////////////

    function activate() {
      if ($stateParams.studentId) {
        studentService.getById($stateParams.studentId).then(
          function(student) {
            vm.student = student;
          }
        );
      } else {
        vm.student = {};
      }
      projectService.getAll().then(
        function(projects) {
          vm.projects = projects;
        }
      );
    }

    function save() {
      if ($stateParams.studentId) {
        studentService.update(vm.student).then(
          function() {
            $state.go('student.grid');
          }
        );
      } else {
        studentService.create(vm.student).then(
          function() {
            $state.go('student.grid');
          }
        );
      }
    }

    function assignProject() {
      assignmentService.create({
        studentId: vm.student.studentId,
        projectId: vm.projectId
      }).then(
        function() {
          $state.reload();
        }
      );
    }
  }
})();