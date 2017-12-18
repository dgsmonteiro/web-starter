(function() {
    'use strict';

    angular
        .module('starter')
        .directive('wizard', wizard);

    function wizard() {
        var directive = {
            restrict: 'E',
            templateUrl: '/app/components/wizard/wizard.view.html',
            transclude: true,
            controller: 'wizardController',
            controllerAs: 'vm'
        };

        return directive;
    }

})();
