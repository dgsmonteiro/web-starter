/**
 * Created by tmedeiros on 13/11/2017.
 */
(function() {
  'use strict';
  angular
    .module('starter')
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
      .state('root.operacao.padrao', {
        breadcrumb: 'Padrão',
        data: {
          autenticacao: true,
          autorizacao: ['administrador', 'tomador'],
          pageTitle: 'Padrão - Projeto base'
        },
        menu : {
          eixo: 'operacao',
          titulo: 'Padrão',
          icone: '#configuracao-boleto'
        },
        url: '/padrao',
        views: {
          'conteudo@root': {
            templateUrl: '/app/pages/operacao/padrao/inicio/inicio.view.html'
          }
        }
      });
  }
})();
