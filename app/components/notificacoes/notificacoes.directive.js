(function() {
  'use strict';

  angular
    .module('starter')
    .directive('notificacoesDirective', notificacoesDirective);

  function notificacoesDirective() {
    var directive = {
      controller: 'notificacoesController',
      controllerAs: 'vm',
      restrict: 'E',
      templateUrl: '/app/components/notificacoes/notificacoes.view.html'
    };

    return directive;
  }
})();
