(function() {
    'use strict';

    angular
        .module('app')
        .controller('ProjectDetailController', ProjectDetailController);

    ProjectDetailController.$inject = ['$stateParams', '$state'];

    /* @ngInject */
    function ProjectDetailController($stateParams, $state) {
        var vm = this;
        vm.title = 'ProjectDetailController';

        activate();

        ////////////////

        function activate() {
        	$state.go('project.grid');
        }
    }
})();