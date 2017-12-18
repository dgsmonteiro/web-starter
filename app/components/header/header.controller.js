(function() {
  'use strict';

  angular
    .module('starter')
    .controller('headerController', headerController);

  headerController.$inject = ['$rootScope', '$document', 'usuarioLogado', '$filter'];

  function headerController($rootScope, $document, usuarioLogado, $filter) {
    /* jshint validthis: true */

    var vm = this;

    vm.clickMenu     = clickMenu;
    vm.usuarioLogado = usuarioLogado;
    vm.recuperaEixoAtivo = recuperaEixoAtivo;

    activate();

    function activate() {
      vm.mostrarMenu = true;
      recuperaEixoAtivo();
    }

    function clickMenu () {
      angular.element('#divSidebar').toggleClass('sidebar-fechado');
      angular.element('.menuPrincipal').toggleClass('menuPrincipal-fechado');
      vm.mostrarMenu = !vm.mostrarMenu;
    }

    function recuperaEixoAtivo(){
      vm.eixoAtivo = $filter('filter')(usuarioLogado.eixos, { ativo: true });
    }

    $rootScope.$on('headerMudarEixo', function () {
    	recuperaEixoAtivo();
    });

  }
})();
