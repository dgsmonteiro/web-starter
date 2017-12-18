## Data
Criada em : 08/11/2017

## Instalação
1 - Injete o componente no controller

## Uso (Sucesso)
sweetAlertMensagens.sucesso.title = 'um texto qualquer';

SweetAlert
  .success('Benefício editado com sucesso!', sweetAlertMensagens.sucesso);

## Uso (Erro)
  SweetAlert.error(erro.data.erros[0], sweetAlertMensagens.erro);

## Uso (Anulação)

1 - Adicionar variáveis
  vm.alertaDeAnulacaoOpcoes                 = sweetAlertMensagens.exclusao.confirmacao;
  vm.alertaDeAnulacaoOpcoes.title           = 'Remover qualquer coisa';
  vm.alertaDeAnulacaoOpcoes.text            = 'Tem certeza que deseja remover qualquer coisa?';
  vm.alertaDeAnulacaoOpcaoConfirmacao       = sweetAlertMensagens.exclusao.sucesso;
  vm.alertaDeAnulacaoOpcaoConfirmacao.title = 'qualquer coisa';
  vm.alertaDeAnulacaoOpcaoConfirmacao.text  = 'qualquer coisa removido com sucesso!';
  vm.anularQualquerCoisa                    = anularQualquerCoisa;

  function anularQualquerCoisa (dados) {}

2 - No HTML
  <button
    class="btn btn-sm btn-danger ml-1"
    sweetalert
    sweet-options="vm.alertaDeAnulacaoOpcoes"
    sweet-confirm-option="vm.alertaDeAnulacaoOpcaoConfirmacao"
    sweet-on-confirm="vm.anularQualquerCoisa(item)"
    type="button">
    <svg aria-hidden="true" class="icone icone-sm">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#worldwide"></use>
      qualquer texto
    </svg>
  </button>
