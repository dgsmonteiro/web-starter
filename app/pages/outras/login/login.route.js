(function() {
  'use strict';

  angular
    .module('starter')
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
      .state('root.login', {
        data: {
          autenticacao: false,
          autorizacao: []
        },
        url: '/login',
        views: {
          '@': {
            templateUrl: '/app/pages/outras/login/login.view.html',
            controller: 'loginController as login'
          }
        }
      });
  }

})();
