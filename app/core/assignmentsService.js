(function() {
    'use strict';

    angular
        .module('app')
        .factory('assignmentService', assignmentService);

    assignmentService.$inject = ['$http', '$q', 'apiUrl', 'toastr'];

    /* @ngInject */
    function assignmentService($http, $q, apiUrl, toastr) {
        var service = {
            create: create,
            getAll: getAll,
            update: update,
            remove: remove
        };
        return service;

        ////////////////

        function create(assignment) {
        	var defer = $q.defer();
        	
        	$http.post(apiUrl + 'assignments', assignment).then(
        	    function(response) {
        	        defer.resolve(response.data);
        	    },
        	    function(error) {
        	        console.log(error);
                    toastr.error('Already assigned to student');
        	        defer.reject(error);
        	    }
        	);
        	
        	return defer.promise;
        }

        function getAll() {
        	var defer = $q.defer();
        		
    		$http.get(apiUrl + 'assignments').then(
    		    function(response) {
    		        defer.resolve(response.data);
    		    },
    		    function(error) {
    		        console.log(error);
    		        defer.reject(error);
    		    }
    		);
    		
    		return defer.promise;	
        }

        function update(assignment) {
        	var defer = $q.defer();
        	
        	$http.put(apiUrl + 'assignments/' + assignment.assignmentId, assignment).then(
        	    function(response) {
        	        defer.resolve();
        	    },
        	    function(error) {
        	        console.log(error);
        	        defer.reject(error);
        	    }
        	);
        	
        	return defer.promise;
        }

        function remove(assignment) {
        	var defer = $q.defer();
        	
        	$http.delete(apiUrl + 'assignments/' + assignment.assignmentId).then(
        	    function(response) {
        	        defer.resolve(response.data);
        	    },
        	    function(error) {
        	        console.log(error);
        	        defer.reject(error);
        	    }
        	);
        	
        	return defer.promise;
        }
    }
})();