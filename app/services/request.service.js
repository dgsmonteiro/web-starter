(function() {
  'use strict';

  angular
    .module('starter')
    .factory('apiService', apiService);

  apiService.$inject = [];

  function apiService() {
    /* jshint validthis: true */
    this.exemplo = exemplo;

    function exemplo() {
      return true;
    }
  }
})();
