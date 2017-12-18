(function() {
  'use strict';

  angular
    .module('starter')
    .directive('sidebarDirective', sidebarDirective);

  sidebarDirective.$inject = ['resize'];

  function sidebarDirective(resize) {

    var directive = {
      controller: 'sidebarController',
      controllerAs: 'sidebar',
      link: link,
      restrict: 'E',
      templateUrl: '/app/components/sidebar/sidebar.view.html'
    };

    return directive;

    function link(scope, element, attrs, ctrl) {
      /* jshint validthis: true */
      var navlink = element.find('.nav-link');

      navlink.on('click', linkClick);
      scope.$on('resize', tamanho);

      /////////////////

      function tamanho (data, $event){
        var sidebar = angular.element('#divSidebar');
        var modo_sidebar = $event.width <= 992 ? sidebar.addClass('sidebar-fechado') : sidebar.removeClass('sidebar-fechado');
        var menu = angular.element('.menuPrincipal');
        var modo_menu = $event.width <= 992 ? menu.addClass('menuPrincipal-fechado') : menu.removeClass('menuPrincipal-fechado');
      }

      function linkClick () {
        navlink.removeClass('navLink-ativo');
        $(this).addClass('navLink-ativo');
      }

    }
  }
})();
