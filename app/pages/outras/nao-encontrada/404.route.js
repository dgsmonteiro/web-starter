(function() {
  'use strict';

  angular
    .module('starter')
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
      .state('root.nao-encontrada', {
        data: {
          autenticacao: false,
          autorizacao: [],
          pageTitle: 'Página não encontrada - Projeto base'
        },
        url: '/nao-encontrada',
        views: {
          '@': {
            templateUrl: '/app/pages/outras/nao-encontrada/404.view.html'
          }
        }
      });
  }
})();
