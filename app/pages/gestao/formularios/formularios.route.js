(function() {
  'use strict';

  angular
    .module('starter')
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
      .state('root.gestao.formularios', {
        breadcrumb: 'Formulários',
        data: {
          autenticacao: true,
          autorizacao: ['administrador', 'tomador'],
          pageTitle: 'Formulários - Projeto base'
        },
        menu : {
          eixo: 'Gestão',
          titulo: 'Formulários',
          icone: '#worldwide'
        },
        url: '/formularios',
        views: {
          'conteudo@root': {
            templateUrl: '/app/pages/gestao/formularios/formularios.view.html',
            controller: 'formulariosController as formulario'
          }
        }
      });
  }
})();
