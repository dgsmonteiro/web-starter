(function () {
    'use strict';

    angular
        .module('starter')
        .directive('loader', loader);

    loader.$inject = ['$http'];

    function loader($http) {
        function link(scope, element, attrs) {

            scope.isLoading = function () {
                return $http.pendingRequests.length > 0;
            };
            scope.$watch(scope.isLoading, function (v) {
                if (v) {
                    element.removeClass('d-none');
                    element.addClass('d-flex');
                } else {
                    element.addClass('d-none');
                    element.removeClass('d-flex');
                }
            });
        }

        return {
            link: link
        };
    }

})();
