(function() {
  'use strict';

  angular
    .module('starter')
    .controller('homeController', homeController);

  homeController.$inject = [];

  function homeController() {
    /* jshint validthis: true */
    var vm = this;

    vm.indicativosTomador = [
      {nome: 'Nome do indicador', numero: 31420, descricao: 'Descrição simplicada do indicador'},
      {nome: 'Nome do indicador', numero: 775, descricao: 'Descrição simplicada do indicador'},
      {nome: 'Nome do indicador', numero: 1112, descricao: 'Descrição referente este indicador'},
      {nome: 'Nome do indicador', numero: 4, descricao: 'Descrição simplicada do indicador'}
    ];

    vm.indicativosPrestador = [
      {nome: 'Nome do indicador', numero: 31420, descricao: 'Descrição simplicada do indicador'},
      {nome: 'Nome do indicador', numero: 1112, descricao: 'Descrição referente este indicador'},
      {nome: 'Nome do indicador', numero: 775, descricao: 'Descrição simplicada do indicador'},
      {nome: 'Nome do indicador', numero: 4, descricao: 'Descrição simplicada do indicador'},
      {nome: 'Nome do indicador', numero: 31420, descricao: 'Descrição simplicada do indicador'},
      {nome: 'Nome do indicador', numero: 1112, descricao: 'Descrição referente este indicador'},
      {nome: 'Nome do indicador', numero: 4, descricao: 'Descrição simplicada do indicador'},
      {nome: 'Nome do indicador', numero: 775, descricao: 'Descrição simplicada do indicador'}
    ];
  }
})();
