(function() {
  'use strict';

  angular
    .module('starter')
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
      .state('root', {
        data: {
          autenticacao: false,
          autorizacao: []
        },
        url: '',
        views: {
          '@': {
            templateUrl: '/app/pages/_root/root.view.html'
          },
          'header@root': {
            template: '<header-directive></header-directive>'
          },
          'sidebar@root': {
            template: '<sidebar-directive></sidebar-directive>'
          },
          'conteudo@root': {
            templateUrl: '/app/pages/integracao/_home/home.view.html',
            controller: 'homeController as home'
          },
          'rodape@root': {
            template: '<rodape-directive></rodape-directive>'
          }
        },
        resolve: {
          redirecionaUsuario: function ($state, sessao, usuarioLogado) {
            if(sessao.verificaSessao()) {
              usuarioLogado.criarUsuarioLogado(sessionStorage.getItem('usuarioSessao'));
              //$state.go('root.gestao');
            }else{
              $state.go('root.login');
            }
          }
        }
      });
  }
})();
