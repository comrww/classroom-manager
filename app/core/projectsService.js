(function() {
  'use strict';

  angular
    .module('app')
    .factory('projectService', projectService);

  projectService.$inject = ['$http', '$q', 'apiUrl'];

  /* @ngInject */
  function projectService($http, $q, apiUrl) {
    var service = {
      create: create,
      getAll: getAll,
      getById: getById,
      update: update,
      remove: remove
    };
    return service;

    ////////////////

    function create(project) {
      var defer = $q.defer();

      $http.post(apiUrl + 'projects', project).then(
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

    function getAll() {
      var defer = $q.defer();

      $http.get(apiUrl + 'projects').then(
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

    function getById(id) {
        var defer = $q.defer();
        
        $http.get(apiUrl + 'projects/' + id).then(
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

    function update(project) {
      var defer = $q.defer();

      $http.put(apiUrl + 'projects/' + project.projectId, project).then(
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

    function remove(project) {
      var defer = $q.defer();

      $http.delete(apiUrl + 'projects/' + project.projectId).then(
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