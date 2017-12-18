(function() {
  'use strict';

  angular
    .module('starter')
    .directive('sistemasDirective', sistemasDirective);

  function sistemasDirective() {
    var directive = {
      controller: 'sistemasController',
      controllerAs: 'sistemas',
      restrict: 'E',
      scope: {},
      templateUrl: '/app/components/sistemas/sistemas.view.html'
    };

    return directive;
  }
})();
