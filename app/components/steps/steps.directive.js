(function() {
    'use strict';

    angular
        .module('starter')
        .directive('steps', steps);

    function steps() {
        var directive = {
            restrict: 'E',
            templateUrl: '/app/components/steps/steps.view.html',
            link: linkFunc
        };

        return directive;

        function linkFunc(scope, el, attr, ctrl) {
          scope.steps = attr.stepcollection.split(',');
        }
    }

})();
