(function() {
  'use strict';

  angular
    .module('starter')
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
      .state('root.acesso-negado', {
        breadcrumb: 'Acesso negado',
        data: {
          autenticacao: true,
          autorizacao: ['administrador', 'tomador'],
          pageTitle: 'Acesso negado - Projeto base'
        },
        url: '/acesso-negado',
        views: {
          'conteudo@root': {
            templateUrl: '/app/pages/outras/acesso-negado/acesso.view.html'
          }
        }
      });
  }
})();
