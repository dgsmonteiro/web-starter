(function() {
  'use strict';

  angular
    .module('starter')
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
      .state('root.operacao', {
        breadcrumb: 'Principal',
        data: {
          autenticacao: true,
          autorizacao: ['administrador', 'tomador'],
          pageTitle: 'Indicadores de operação - Projeto base'
        },
        menu : {
          eixo: 'Operação',
          titulo: 'Home',
          icone: '#configuracao-boleto'
        },
        url: '/operacao',
        views: {
          'conteudo@root': {
            templateUrl: '/app/pages/operacao/_home/home.view.html',
            controller: 'homeController as home'
          }
        }
      });
  }
})();
