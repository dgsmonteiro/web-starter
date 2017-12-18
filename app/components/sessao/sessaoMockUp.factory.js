(function() {
    'use strict';

    angular
        .module('starter')
        .factory('sessaoMockUp', sessaoMockUp);

    sessaoMockUp.$inject = ['Restangular'];

    /* @ngInject */
    function sessaoMockUp(Restangular) {
     return Restangular.withConfig(function(RestangularConfigurer) {
        RestangularConfigurer.setBaseUrl('http://localhost:8081/api/');
        RestangularConfigurer.setDefaultHeaders({'Content-Type': 'application/json'});
     });
    }
})();
