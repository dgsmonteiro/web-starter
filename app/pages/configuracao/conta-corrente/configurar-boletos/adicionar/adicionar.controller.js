(function() {
  'use strict';

  angular
    .module('starter')
    .controller('modeloConfigurarBoletoController', modeloConfigurarBoletoController);

  modeloConfigurarBoletoController.$inject = ['SweetAlert', 'sweetAlertMensagens'];

  function modeloConfigurarBoletoController(SweetAlert, sweetAlertMensagens) {
    /* jshint validthis: true */
    var vm = this;
    vm.modulosDeGrupos = [
      {sigla: 'AF', descricao: 'Tomador'},
      {sigla: 'AX', descricao: 'Prestador'},
      {sigla: 'AL', descricao: 'Contrução Civil'},
      {sigla: 'DZ', descricao: 'Orgão Publico'},
      {sigla: 'AS', descricao: 'Cartório'}
    ];
    vm.modelos = [
      {valor: 'todos', descricao: 'Boleto único para todos os módulos'},
      {valor: 'cada', descricao: 'Boleto Especifico para cada módulo'},
      {valor: 'grupo', descricao: 'Boleto por grupo de módulos'}
    ];
    vm.salvarDados = salvarDados;
    sweetAlertMensagens.sucesso.title = 'Boleto';
    sweetAlertMensagens.erro.title = 'Erro';

    function salvarDados(dadosRecebidos) {
      console.info(dadosRecebidos, 'informações do formulário');
      SweetAlert.success('Boleto Configurado com sucesso', sweetAlertMensagens.sucesso);
    }
  }
})();
