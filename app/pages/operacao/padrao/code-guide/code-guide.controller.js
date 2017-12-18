(function() {
  'use strict';

  angular
    .module('starter')
    .controller('operacaoPadraoCodeGuideControler', operacaoPadraoCodeGuideControler);

  operacaoPadraoCodeGuideControler.$inject = [];

  function operacaoPadraoCodeGuideControler() {
    /* jshint validthis: true */
    var vm = this;

    vm.carregaTopicos = carregaTopicos;

    activate();

    function activate() {
      console.log('TESTE');
      carregaTopicos();
    }

    function carregaTopicos() {
      vm.topicosController = [
        {nome: 'Acessibilidade', numero: 4, descricao: 'Descrição simplicada do topico'},
        {nome: 'CSS', numero: 775, descricao: 'Descrição simplicada do topico'},
        {nome: 'JS', numero: 1112, descricao: 'Descrição referente este topico'},
        {nome: 'HTML', numero: 31420, descricao: 'Descrição simplicada do topico'}
      ];
    }
  }
})();
