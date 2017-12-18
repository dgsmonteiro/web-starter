(function() {
  'use strict';

  angular
  .module('starter')
  .controller('sidebarController', sidebarController);

  sidebarController.$inject = ['$rootScope', '$state', 'usuarioLogado', '$transitions', '$filter'];

  function sidebarController($rootScope, $state, usuarioLogado, $transitions, $filter) {
    /* jshint validthis: true */
    var vm = this;

    activate();

    function activate(){
      vm.usuarioLogado = usuarioLogado;
      vm.lista = $state.get();
      recuperaEixoAtivo();
    }

    function recuperaEixoAtivo(){
      vm.eixoAtivo = $filter('filter')(usuarioLogado.eixos, { ativo: true });
    }

    $rootScope.$on('sidebarMudarEixo', function () {
    	recuperaEixoAtivo();
    });

    // vm.teste = $filter('filter')(usuarioLogado.eixos, true);
    // console.log(vm);
  //   vm.init = init;

  //   init();
  //   $rootScope.$on('sidebarMudarEixo', sidebarMudarEixo);
  //   $rootScope.$on('userMudarPerfil', userMudarPerfil);

  //   /////////////////

  //   function init () {
  //     vm.eixoAtivoTitulo = 'Operação';
  //     vm.administrador   = false;
  //     criaMenu();
  //   }

  //   function criaMenu(){
  //     vm.states = $state.get();
  //     vm.menu = [];
  //     vm.menuItem = {};

  //     vm.states.forEach(function(state){
  //       if (state.menu !== undefined) {
  //         vm.menuItem = state.menu;
  //         vm.menuItem.url = state.name;
  //         vm.menu.push(vm.menuItem);
  //       }
  //     });
  //   }

  //   function sidebarMudarEixo (event, args) {
  //     vm.eixoAtivoTitulo = args.eixo;
  //     vm.eixoAtivoIcone  = args.icone;
  //   }

  //   function userMudarPerfil (event, args) {
  //     vm.administrador = args.administrador;
  //   }
  }
})();
