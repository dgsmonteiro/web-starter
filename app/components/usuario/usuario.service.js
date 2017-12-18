(function() {
  'use strict';

  angular
    .module('starter')
    .service('usuarioLogado', usuarioLogado);

  usuarioLogado.$inject = ['sessao'];

  function usuarioLogado(sessao) {
    /* jshint validthis: true */
    this.criarUsuarioLogado = criarUsuarioLogado;

    function criarUsuarioLogado (data) {
      var obj = JSON.parse(window.atob(data));

      this.nome         = obj.nome;
      this.foto         = obj.foto;
      this.ip           = obj.ip;
      this.ultimoAcesso = obj.ultimoAcesso;
      this.perfis       = obj.perfil;
      this.eixos        = decodeNomeEixo(obj.eixos);
      this.produtos     = obj.produtos;
      this.empresas     = obj.empresas;
      this.idCliente    = obj.id;
    }

    function removeUsuarioDaSessao () {
      this.nome         = '';
      this.foto         = '';
      this.ip           = '';
      this.ultimoAcesso = '';
      this.perfis       = '';
      this.eixos        = '';
      this.produtos     = '';
      this.empresas     = '';
      this.idCliente    = '';
    }

    function decodeNomeEixo(valor) {
      valor.forEach(function (item) {
        item.nome = item.nome.replace('Ã§', 'ç').replace('Ã£', 'ã');
      });

      return valor;
    }
  }
})();
