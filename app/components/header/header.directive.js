(function() {
  'use strict';

  angular
    .module('starter')
    .directive('headerDirective', headerDirective);

  function headerDirective() {
    var directive = {
      controller: 'headerController',
      controllerAs: 'header',
      restrict: 'E',
      templateUrl: '/app/components/header/header.view.html'
    };

    return directive;

    function linkFunc(scope, el, attr, ctrl) {}
  }
})();
