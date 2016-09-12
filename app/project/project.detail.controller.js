(function() {
  'use strict';

  angular
    .module('app')
    .controller('ProjectDetailController', ProjectDetailController);

  ProjectDetailController.$inject = ['projectService', 'assignmentService', 'studentService', '$stateParams', '$state'];

  /* @ngInject */
  function ProjectDetailController(projectService, assignmentService, studentService, $stateParams, $state) {
    var vm = this;
    vm.assignProject = assignProject;
    vm.save = save;
    vm.students = [];

    activate();

    ////////////////

    function activate() {
      if ($stateParams.projectId) {
        projectService.getById($stateParams.projectId).then(
          function(project) {
            vm.project = project;
          }
        );
      } else {
        vm.project = {};
      }
      studentService.getAll().then(
        function(students) {
          vm.students = students;
        }
      );
    }

    function save() {
        if($stateParams.projectId) {
            projectService.update(vm.project).then(
                function() {
                    $state.go('project.grid');
                }
            );
        } else {
            projectService.create(vm.project).then(
                function() {
                    $state.go('project.grid');
                }
            );
        }
    }

    function assignProject() {
      assignmentService.create({
        studentId: vm.studentId,
        projectId: vm.project.projectId
      }).then(
        function() {
          $state.reload();
          //$state.go('project.grid');
        }
      );
    }
  }
})();