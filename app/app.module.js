(function() {
	'use strict';

	angular
	  .module('app', [
	      'ui.router',
	      'toastr'
	  ])
	  .config(appConfig)
	  .value('apiUrl', 'http://localhost:50493/api/');

	  function appConfig($urlRouterProvider, $stateProvider) {
	  		$urlRouterProvider.otherwise('dashboard');

	  		$stateProvider
	  		.state('dashboard', {
	  			url: '/dashboard', 
	  			controller: 'DashboardController as dashboard', 
	  			templateUrl: 'app/dashboard/dashboard.html'
	  		})
	  		.state('project', {
	  			url: '/project',
	  			abstract: true,
	  			template: '<div ui-view></div>'
	  		})
	  			.state('project.grid', {
	  				url: '/grid',
	  				controller: 'ProjectGridController as projectGrid',
	  				templateUrl: 'app/project/project.grid.html'
	  			})

	  			.state('project.detail', {
	  				url: '/detail?projectId',
	  				controller: 'ProjectDetailController as projectDetail',
	  				templateUrl: 'app/project/project.detail.html'
	  			})

	  		.state('student', {
	  			url: '/student',
	  			abstract: true,
	  			template: '<div ui-view></div>'
	  		})
	  			.state('student.grid', {
	  				url: '/grid',
	  				controller: 'StudentGridController as studentGrid',
	  				templateUrl: 'app/student/student.grid.html'
	  			})

	  			.state('student.detail', {
	  				url: '/detail?studentId',
	  				controller: 'StudentDetailController as studentDetail',
	  				templateUrl: 'app/student/student.detail.html'
	  			});
	  };
})();

