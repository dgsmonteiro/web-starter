
(function() {
  'use strict';

  angular
    .module('starter')
    .service('apiLogin', apiLogin);

  apiLogin.$inject = ['sessaoMockUp', 'usuarioLogado', 'sessao'];

  function apiLogin(sessaoMockUp, usuarioLogado, sessao) {
    /* jshint validthis: true */
    this.logar = logar;

    function logar(data) {
      console.log(data);
      // if(data.senha === 1){
      //   retornoLogar(data);
      // } else {
      //   retornoLogar(data);
      // }
      return sessaoMockUp
        .oneUrl('/usuarios')
        .one(data.senha)
        .get()
        .then(retornoLogar)
        .catch(retornoLogar);
    }

    function retornoLogar(data) {
      usuarioLogado.criarUsuarioLogado(data.dados, data.id);
      sessao.criarSessao(data.dados);
      return true;
    }

    function erroAoLogar(erro) {
      // return erro;
    }
  }
})();
