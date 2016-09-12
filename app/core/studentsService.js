(function() {
  'use strict';

  angular
    .module('app')
    .factory('studentService', studentService);

  studentService.$inject = ['$http', '$q', 'apiUrl'];

  /* @ngInject */
  function studentService($http, $q, apiUrl) {
    var service = {
      create: create,
      getAll: getAll,
      getById: getById,
      update: update,
      remove: remove
    };
    return service;

    ////////////////

    function create(student) {
      var defer = $q.defer();

      $http.post(apiUrl + 'students', student).then(
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

      $http.get(apiUrl + 'students').then(
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
      
      $http.get(apiUrl + 'students/' + id).then(
          function(response) {
            console.log(response.data);
              defer.resolve(response.data);
          },
          function(error) {
              console.log(error);
              defer.reject(error);
          }
      );
      
      return defer.promise;
    }

    function update(student) {
      var defer = $q.defer();

      $http.put(apiUrl + 'students/' + student.studentId, student).then(
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

    function remove(student) {
      var defer = $q.defer();

      $http.delete(apiUrl + 'students/' + student.studentId).then(
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