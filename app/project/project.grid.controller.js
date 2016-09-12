(function() {
    'use strict';

    angular
        .module('app')
        .controller('ProjectGridController', ProjectGridController);

    ProjectGridController.$inject = ['projectService'];

    /* @ngInject */
    function ProjectGridController(projectService) {
        var vm = this;
        vm.title = 'ProjectGridController';

        activate();

        ////////////////

        function activate() {
            projectService.getAll().then(
                function(projects) {
                    vm.projects = projects;
                }
            );
        }
    }
})();