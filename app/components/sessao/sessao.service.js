(function() {
  'use strict';

  angular
    .module('starter')
    .service('sessao', sessao);

  sessao.$inject = ['$q', '$window', 'sessaoMockUp', '$state'];

  function sessao($q, $window, sessaoMockUp, $state) {
    /* jshint validthis: true */
    this.dadosDaSessao       = dadosDaSessao;
    this.criarSessao         = criarSessao;
    this.gravarDadosNaSessao = gravarDadosNaSessao;
    this.removerSessao       = removerSessao;
    this.verificaSessao      = verificaSessao;

    function verificaSessao () {
      return localStorage.getItem('usuarioSessao') ? true : false;
    }
    function dadosDaSessao() {
      //retorna os dados da sessao
      var sessao = localStorage.getItem('usuarioSessao');
      var dados  = JSON.parse(window.atob(sessao));
      return dados;
    }
    function criarSessao(data) {
      //cria a seesao com o token gerado no back end
      localStorage.setItem('usuarioSessao', data);
    }
    function gravarDadosNaSessao() {
      //grava os dados modificados na seesao criptografado
    }
    function removerSessao() {
      //destroi a sessao
      localStorage.clear();
      $window.location.reload();
      $state.go('root.login');
    }
  }
})();
