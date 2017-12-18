(function() {
  'use strict';

  angular
    .module('starter')
    .controller('sistemasController', sistemasController);

  sistemasController.$inject = ['usuarioLogado'];

  function sistemasController(usuarioLogado) {
    /* jshint validthis: true */
    var vm           = this;
    vm.usuarioLogado = usuarioLogado;
  }
})();
