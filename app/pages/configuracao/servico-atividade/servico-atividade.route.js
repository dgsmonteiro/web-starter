(function() {
  'use strict';

  angular
    .module('starter')
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
      .state('root.configuracao.servico-atividade', {
        breadcrumb: 'Serviço / Atividade',
        data: {
          autenticacao: true,
          autorizacao: ['administrador', 'tomador'],
          pageTitle: 'Serviço / Atividade - Projeto base'
        },
        menu : {
          eixo: 'Configuração',
          titulo: 'Serviço / Atividade',
          icone: '#worldwide'
        },
        url: '/servico-atividade',
        views: {
          'conteudo@root': {
            templateUrl: '/app/pages/configuracao/servico-atividade/inicio/inicio.view.html'
          }
        }
      })
      .state('root.configuracao.servico-atividade.aliquota', {
        breadcrumb: 'Consultar alíquotas',
        data: {
          autenticacao: true,
          autorizacao: ['administrador', 'tomador'],
          pageTitle: 'Alíquotas - Projeto base'
        },
        url: '/aliquota',
        views: {
          'conteudo@root': {
            templateUrl: '/app/pages/configuracao/servico-atividade/aliquotas/consultar/consulta.view.html',
            controller: 'aliquotaListaController as aliquota'
          }
        }
      })
      .state('root.configuracao.servico-atividade.construcao-civil', {
        breadcrumb: 'Construção cívil',
        data: {
          autenticacao: true,
          autorizacao: ['administrador', 'tomador'],
          pageTitle: 'Construção cívil - Projeto base'
        },
        url: '/construcao-civil',
        views: {
          'conteudo@root': {
            templateUrl: '/app/pages/configuracao/servico-atividade/construcao-civil/consultar/construcao-civil.view.html',
            controller: 'construcaoCivilController as construcaoCivil'
          }
        }
      });
  }
})();
