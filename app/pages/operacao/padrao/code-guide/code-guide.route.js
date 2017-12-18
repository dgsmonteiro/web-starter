(function() {
  'use strict';

  angular
    .module('starter')
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
      .state('root.operacao.padrao.code-guide', {
        breadcrumb: 'Code guide',
        data: {
          autenticacao: true,
          autorizacao: ['administrador', 'tomador'],
          pageTitle: 'Code-guide - Projeto base'
        },
        url: '/code-guide',
        views: {
          'conteudo@root': {
            templateUrl: '/app/pages/operacao/padrao/code-guide/code-guide.view.html',
            controller: 'operacaoPadraoCodeGuideControler as operacaoPadraoCodeGuide'
          }
        }
      });

  }
})();
