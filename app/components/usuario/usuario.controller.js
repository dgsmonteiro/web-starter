(function() {
  'use strict';

  angular
    .module('starter')
    .controller('usuarioController', usuarioController);

  usuarioController.$inject = ['$rootScope', '$document', 'usuarioLogado', 'sessao'];

  function usuarioController($rootScope, $document, usuarioLogado, sessao) {
    /* jshint validthis: true */
    var vm           = this;
    vm.usuarioLogado = usuarioLogado;
    vm.deslogar      = deslogar;
    vm.mudarPerfil   = mudarPerfil;
    vm.perfil         = 'Tomador';
    vm.mostrarUsuario = false;
    vm.clickUsuario   = clickUsuario;
    vm.fechaMenu      = fechaMenu;

    function deslogar () {
      sessao.removerSessao();
    }

    function mudarPerfil (perfil) {
      usuarioLogado.perfilAtivo = perfil;
    }

    // function mudarPerfil (adm) {
    //   var perfil = adm ? vm.perfil = 'Administrador' : vm.perfil = 'Tomador';
    //   $rootScope.$broadcast('userMudarPerfil', { administrador: adm });
    // }

    function clickUsuario () {
      vm.mostrarUsuario = !vm.mostrarUsuario;
      var perfilUsuario = vm.mostrarUsuario ? angular.element('html').addClass('perfilAberto') : angular.element('html').removeClass('perfilAberto');
    }

    function fechaMenu (){
      angular.element('html').removeClass('perfilAberto');
    }
  }
})();
