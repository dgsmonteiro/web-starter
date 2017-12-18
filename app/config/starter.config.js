(function() {
  'use strict';

  angular
    .module('starter')
    .config(config);

  config.$inject = ['$urlRouterProvider', '$locationProvider', 'RestangularProvider', 'resizeProvider'];

  /* @ngInject */
  function config($urlRouterProvider, $locationProvider, RestangularProvider, resizeProvider) {
    $urlRouterProvider.otherwise('/nao-encontrada');

    // set throttle time
    resizeProvider.throttle = 100;
    // don't bind resize events on service innitialization
    resizeProvider.initBind = true;

    $locationProvider.html5Mode({
      enabled: false,
      requireBase: false
    }).hashPrefix('');
  }
})();
