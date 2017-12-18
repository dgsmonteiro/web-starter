(function() {
  'use strict';

  angular
    .module('starter')
    .controller('aliquotaListaController', aliquotaListaController);

  aliquotaListaController.$inject = ['sweetAlertMensagens'];

  function aliquotaListaController(sweetAlertMensagens) {
    /* jshint validthis: true */
    var vm = this;
    vm.listaAliquotas = [
      {valor: '2.48%', inicio: '01/11/2017', fim: '30/11/2017', id: 0},
      {valor: '4.01%', inicio: '04/07/2017', fim: '30/10/2017', id: 1},
      {valor: '5.00%', inicio: '04/03/2014', fim: '15/04/2016', id: 2},
      {valor: '3.23%', inicio: '01/07/2013', fim: '01/07/2015', id: 3}
    ];
    vm.anulaAliquota = anulaAliquota;
    vm.alertaDeAnulacaoOpcoes = sweetAlertMensagens.exclusao.confirmacao;
    vm.alertaDeAnulacaoOpcoes.title = 'Excluir alíquota ?';
    vm.alertaDeAnulacaoOpcoes.text = 'Tem certeza que deseja excluir esta alíquota ?';
    vm.alertaDeAnulacaoOpcaoConfirmacao = sweetAlertMensagens.exclusao.sucesso;
    vm.alertaDeAnulacaoOpcaoConfirmacao.title = 'Excluída';
    vm.alertaDeAnulacaoOpcaoConfirmacao.text = 'Alíquota excluida com sucesso!';

    function anulaAliquota(aliquota) {
      console.info(aliquota, 'aliquota recebida');

      var indice = vm.listaAliquotas.indexOf(aliquota);
      vm.listaAliquotas.splice(indice, 1);
    }
  }
})();
