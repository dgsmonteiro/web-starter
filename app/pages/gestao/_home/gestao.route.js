(function() {
  'use strict';

  angular
    .module('starter')
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
      .state('root.gestao', {
        breadcrumb: 'Principal',
        data: {
          autenticacao: true,
          autorizacao: ['administrador', 'tomador'],
          pageTitle: 'Indicadores de Gestão - Projeto base'
        },
        menu : {
          eixo: 'Gestão',
          titulo: 'Home',
          icone: '#configuracao-boleto'
        },
        url: '/gestao',
        views: {
          'conteudo@root': {
            templateUrl: '/app/pages/gestao/_home/home.view.html',
            controller: 'homeController as home'
          }
        }
      });
  }
})();
