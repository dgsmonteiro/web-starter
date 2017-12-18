(function() {
  'use strict';

  angular
    .module('starter')
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
      .state('root.integracao', {
        breadcrumb: 'Principal',
        data: {
          autenticacao: true,
          autorizacao: ['administrador', 'tomador'],
          pageTitle: 'Indicadores de integração - Projeto base'
        },
        menu : {
          eixo: 'Integração',
          titulo: 'Home',
          icone: '#configuracao-boleto'
        },
        url: '/integracao',
        views: {
          'conteudo@root': {
            templateUrl: '/app/pages/integracao/_home/home.view.html',
            controller: 'homeController as home'
          }
        }
      });
  }
})();
