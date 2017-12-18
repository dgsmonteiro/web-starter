(function() {
  'use strict';

  angular
    .module('starter')
    .controller('notificacoesController', notificacoesController);

  notificacoesController.$inject = [];

  function notificacoesController() {
    /* jshint validthis: true */
    var vm         = this;
    var myTabs     = $('#tabs');
    var myDropDown = $('#myDropDown');

    myTabs.on('click', '.nav-tabs a', myTabsCallback);
    myDropDown.on('hide.bs.dropdown', myDropDownCallback);

    /////////////////

    function myTabsCallback () {
      $(this).closest('.dropdown').addClass('dontClose');
    }

    function myDropDownCallback (e) {
      if ($(this).hasClass('dontClose')) {
        e.preventDefault();
      }
      $(this).removeClass('dontClose');
    }
  }
})();
