(function() {
  'use strict';

  angular
    .module('starter')
    .controller('formulariosController', formulariosController);

  formulariosController.$inject = [];

  function formulariosController() {
    /* jshint validthis: true */
    var vm = this;
    vm.modulosDeGrupos = [
      {sigla: 'AF', descricao: 'Tomador', id: 0},
      {sigla: 'AX', descricao: 'Prestador', id: 1},
      {sigla: 'AL', descricao: 'Contrução Civil', id: 2},
      {sigla: 'DZ', descricao: 'Orgão Publico', id: 3},
      {sigla: 'AS', descricao: 'Cartório', id: 4}
    ];

    vm.modelos = [
      {valor: 'todos', descricao: 'Boleto único para todos os módulos', id: 0},
      {valor: 'cada', descricao: 'Boleto Especifico para cada módulo', id: 1},
      {valor: 'grupo', descricao: 'Boleto por grupo de módulos', id: 2}
    ];

    vm.zonas = [
      {valor: 'ZS', descricao: 'Zona Sul [São Paulo]', id: 0, model: false},
      {valor: 'ZN', descricao: 'Zona Norte [São Paulo]', id: 1, model: false},
      {valor: 'ZL', descricao: 'Zona Leste [São Paulo]', id: 2, model: false},
      {valor: 'ZO', descricao: 'Zona Oeste [São Paulo]', id: 3, model: false}
    ];
  }
})();
