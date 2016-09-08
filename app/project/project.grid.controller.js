(function() {
    'use strict';

    angular
        .module('app')
        .controller('ProjectGridController', ProjectGridController);

    ProjectGridController.$inject = [];

    /* @ngInject */
    function ProjectGridController() {
        var vm = this;
        vm.title = 'ProjectGridController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();