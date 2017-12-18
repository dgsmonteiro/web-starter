(function() {
  'use strict';

  var sweetAlertMensagens = {
    sucesso: {
      title: '',
      type: 'success',
      allowEscapeKey: false,
      showCancelButton: false,
      confirmButtonText: 'Ok'
    },
    erro: {
      title: 'Erro',
      type: 'error',
      allowEscapeKey: false,
      showCancelButton: false,
      confirmButtonText: 'Ok'
    },
    exclusao: {
      confirmacao: {
        title:'', //'Excluir Benefício',
        text: '',//'Tem certeza que deseja excluir este Benefício ?',
        type: 'error',
        allowEscapeKey: false,
        showCancelButton: true,
        closeOnConfirm: false,
        cancelButtonText: 'Não',
        confirmButtonText: 'Sim'
      },
      sucesso: {
        title:'',//'Benefício',
        text: '',//'Benefício excluido com sucesso!',
        type: 'success'
      }
    }
  };

  angular
    .module('starter')
    .value('sweetAlertMensagens', sweetAlertMensagens);

})();
