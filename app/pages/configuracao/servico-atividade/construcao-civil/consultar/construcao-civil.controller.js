(function() {
  'use strict';

  angular
    .module('starter')
    .controller('construcaoCivilController', construcaoCivilController);

  construcaoCivilController.$inject = ['sweetAlertMensagens'];

  function construcaoCivilController(sweetAlertMensagens) {
    /* jshint validthis: true */
    var vm = this;
    vm.opcoesDaTabela = [
      {codigo: '14.06', codigoAtividade: '265150002', descricao: 'Concepção, Instalação e Integração de Sistemas', aliquota: '2.45%', id: 0},
      {codigo: '15.01', codigoAtividade: '645060000', descricao: 'Sociedades de Capitalização', aliquota: '5.01%', id: 1}
    ];

    vm.anulaAtividadeConstrucaoCivil = anulaAtividadeConstrucaoCivil;
    vm.alertaDeAnulacaoOpcoes = sweetAlertMensagens.exclusao.confirmacao;
    vm.alertaDeAnulacaoOpcoes.title = 'Excluir atividade de Construção Civil ?';
    vm.alertaDeAnulacaoOpcoes.text = 'Tem certeza que deseja excluir esta atividade ?';
    vm.alertaDeAnulacaoOpcaoConfirmacao = sweetAlertMensagens.exclusao.sucesso;
    vm.alertaDeAnulacaoOpcaoConfirmacao.title = 'Excluída';
    vm.alertaDeAnulacaoOpcaoConfirmacao.text = 'Atividade de Construção Civil excluida com sucesso!';

    function anulaAtividadeConstrucaoCivil(elemento) {
      console.info(elemento, 'id recebido em construção civil');

      var indice = vm.opcoesDaTabela.indexOf(elemento);
      vm.opcoesDaTabela.splice(indice, 1);
    }
  }
})();
