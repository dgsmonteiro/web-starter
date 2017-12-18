(function() {
  'use strict';

  angular
    .module('starter')
    .controller('loginController', loginController);

  loginController.$inject = ['apiLogin', '$state', 'usuarioLogado'];

  function loginController(apiLogin, $state, usuarioLogado) {
    /* jshint validthis: true */
    var vm   = this;
    vm.logar = logar;

    function logar(isValid) {
      if(isValid){
        apiLogin.logar(vm).then(function(data) {
          usuarioLogado.criarUsuarioLogado(sessionStorage.getItem('usuarioSessao'));
        });
        $state.go('root.gestao');

      }
    }
  }
})();
