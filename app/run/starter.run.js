(function() {
  'use strict';

  angular
    .module('starter')
    .run(run);

  run.$inject = ['sessao', '$transitions', 'DTDefaultOptions', '$state'];

  function run(sessao, $transitions, DTDefaultOptions, $state) {
    $transitions.onStart({ to: 'root.**'}, verificaUsuarioLogado);

    function verificaUsuarioLogado (transicao) {
      var acesso = {
        autenticacao: transicao.to().data.autenticacao,
        autorizacao: transicao.to().data.autorizacao
      };

      if(!sessao.verificaSessao()) {
        return $state.go('root.login');
      }
    }

    DTDefaultOptions.setLoadingTemplate('<div class="col-12 text-center">Carregando...</div>');
    DTDefaultOptions.setOption('lengthMenu', [ 5, 10, 20, 50 ]);
    DTDefaultOptions.setDisplayLength(5);
    DTDefaultOptions.setLanguage({
      'sEmptyTable': 'Nenhum registro encontrado',
      'sInfo': 'Mostrando de _START_ até _END_ de _TOTAL_ registros',
      'sInfoEmpty': 'Mostrando 0 até 0 de 0 registros',
      'sInfoFiltered': '(Filtrados de _MAX_ registros)',
      'sInfoPostFix': '',
      'sInfoThousands': '.',
      'sLengthMenu': 'Exibir _MENU_ itens por página',
      'sLoadingRecords': 'Carregando...',
      'sProcessing': 'Processando...',
      'sZeroRecords': 'Nenhum registro encontrado',
      'sSearch': 'Pesquisar',
      'oPaginate': {
        'sNext': 'Próximo',
        'sPrevious': 'Anterior',
        'sFirst': 'Primeiro',
        'sLast': 'Último'
      },
      'oAria': {
        'sSortAscending': ': Ordenar colunas de forma ascendente',
        'sSortDescending': ': Ordenar colunas de forma descendente'
      }
    });
  }
})();
