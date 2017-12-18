(function() {
  'use strict';

  angular
    .module('starter')
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
      .state('root.icones', {
        breadcrumb: 'Ícones',
        data: {
          autenticacao: true,
          autorizacao: ['administrador', 'tomador'],
          pageTitle: 'Ícones - Projeto base'
        },
        menu: {
          eixo: 'Gestão',
          titulo: 'Ícones',
          icone: '#worldwide'
        },
        url: '/icones',
        views: {
          'conteudo@root': {
            templateUrl: '/app/pages/outras/icones/icones.view.html',
            controller: 'iconesController as icone'
          }
        }
      });
  }
})();
