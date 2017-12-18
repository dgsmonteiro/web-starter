(function() {
  'use strict';

  angular
    .module('starter')
    .controller('loginController', loginController);

  loginController.$inject = ['login', '$state'];

  /* @ngInject */
  function loginController(login, $state) {
    /* jshint validthis: true */
    var vm   = this;
    vm.logar = logar;

    ////////////////

    function logar (data) {
      if(data.$valid) {
        if (login.logar(vm)) {
          $state.go('root.operacao');
        }
      }

    }
  }
})();
