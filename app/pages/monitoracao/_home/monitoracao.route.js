(function() {
  'use strict';

  angular
    .module('starter')
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
      .state('root.monitoracao', {
        breadcrumb: 'Principal',
        data: {
          autenticacao: true,
          autorizacao: ['administrador', 'tomador'],
          pageTitle: 'Indicadores de monitoração - Projeto base'
        },
        menu : {
          eixo: 'Monitoração',
          titulo: 'Home',
          icone: '#worldwide'
        },
        url: '/monitoracao',
        views: {
          'conteudo@root': {
            templateUrl: '/app/pages/monitoracao/_home/home.view.html',
            controller: 'homeController as home'
          }
        }
      });
  }
})();
