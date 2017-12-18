(function() {
  'use strict';

  angular
    .module('starter')
    .config(config);


  function config($stateProvider) {
    $stateProvider
      .state('root.gestao.botoes', {
        breadcrumb: 'Botões',
        data: {
          autenticacao: true,
          autorizacao: ['administrador', 'tomador'],
          pageTitle: 'Botões - Projeto base'
        },
        menu : {
          eixo: 'Gestão',
          titulo: 'Botoes',
          icone: '#worldwide'
        },
        url: '/botoes',
        views: {
          'conteudo@root': {
            templateUrl: '/app/pages/gestao/botoes/botoes.view.html',
            controller: 'botoesController as botoes'
          }
        }
      });
  }
})();
