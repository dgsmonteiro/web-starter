(function() {
  'use strict';

  angular
    .module('starter')
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
      .state('root.configuracao', {
        breadcrumb: 'Principal',
        data: {
          autenticacao: true,
          autorizacao: ['administrador', 'tomador'],
          pageTitle: 'Indicadores de configuração - Projeto base'
        },
        url: '/configuracao',
        views: {
          'conteudo@root': {
            templateUrl: '/app/pages/configuracao/_home/home.view.html'
          }
        }
      });
  }
})();
