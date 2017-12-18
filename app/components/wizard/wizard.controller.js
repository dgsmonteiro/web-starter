(function() {
    'use strict';

    angular
        .module('starter')
        .controller('wizardController', wizardController);

    wizardController.$inject = ['$scope'];

    function wizardController($scope) {
        $scope.step = 1;
        $scope.nextStep = nextStep;

        function nextStep (step) {
          $scope.step = step;
        }
    }

})();
