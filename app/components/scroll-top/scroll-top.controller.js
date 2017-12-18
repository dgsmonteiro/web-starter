(function() {
    'use strict';

    angular
        .module('starter')
        .controller('scrollTopController', scrollTopController);

    scrollTopController.$inject = ['$document'];

    function scrollTopController($document) {
        /* jshint validthis: true */
        var vm = this;

        activate();

        function activate() {
        }

        $(window).scroll(function () {
          if ($(this).scrollTop() > 50) {
            angular.element('.back-to-top').fadeIn();
          } else {
            angular.element('.back-to-top').fadeOut();
          }
        });

        angular.element('.back-to-top').click(function () {
          angular.element('.back-to-top').tooltip('hide');
          angular.element('body,html').animate({
            scrollTop: 0
          }, 500);
          return false;
        });

    }
})();
