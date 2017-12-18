(function() {
  'use strict';

  angular
    .module('starter')
    .controller('iconesController', iconesController);

  iconesController.$inject = [];

  function iconesController() {
    /* jshint validthis: true */
    var vm = this;

    vm.listaIconesLogo = [
      {id: '#logo-icon'},
      {id: '#logo-name'},
      {id: '#logo-full'}
    ];

    vm.listaIconesComum = [
      {id: '#alerta-notificacao'},
      {id: '#avatar-pessoa-usuario'},
      {id: '#bandeira-chegada-finalizacao'},
      {id: '#cadeado-restrito-bloqueado-senha'},
      {id: '#calendario-data-dia'},
      {id: '#camera-fotografica-foto'},
      {id: '#carregador'},
      {id: '#comentario-mensagem-conversa-batepapo'},
      {id: '#compra-carrinho-mercado'},
      {id: '#coracao-favoritos'},
      {id: '#eixo-configuracao'},
      {id: '#eixo-gestao'},
      {id: '#eixo-integracao'},
      {id: '#eixo-monitoracao'},
      {id: '#eixo-operacao'},
      {id: '#favoritos-estrela'},
      {id: '#imagem-foto'},
      {id: '#indicador-dedo-biometria-clique'},
      {id: '#ir-refazer'},
      {id: '#lapis-editar'},
      {id: '#lixo'},
      {id: '#localizacao-mapa'},
      {id: '#lupa-zoom-buscar-pesquisa'},
      {id: '#mail-carta-envelope-mensagem'},
      {id: '#mais-adicionar-+'},
      {id: '#mais-adicionar-+-2'},
      {id: '#manutencao'},
      {id: '#mao-biometria-dedos'},
      {id: '#menos-remover--'},
      {id: '#menos-remover--2'},
      {id: '#menu-botoes'},
      {id: '#menu-eixos'},
      {id: '#nuvem-carregar'},
      {id: '#pasta'},
      {id: '#pessoa-cidadao'},
      {id: '#pin-mapa'},
      {id: '#raio-energia'},
      {id: '#recarregar-atualizar'},
      {id: '#relogio-horario-tempo'},
      {id: '#repetir'},
      {id: '#salvar-gravar-disquete'},
      {id: '#seta-baixo-desce'},
      {id: '#seta-baixo-desce-2'},
      {id: '#seta-cima-sobe'},
      {id: '#seta-cima-sobe-2'},
      {id: '#seta-direita-anterior-voltar'},
      {id: '#seta-direita-anterior-voltar-2'},
      {id: '#seta-esquerda-proximo-prosseguir'},
      {id: '#seta-esquerda-proximo-prosseguir-2'},
      {id: '#setas-cima-baixo-expandir-listar-vertical'},
      {id: '#setas-cima-baixo-expandir-listar-vertical-2'},
      {id: '#setas-esquerda-direita-expandir-listar-horizontal'},
      {id: '#setas-esquerda-direita-expandir-listar-horizontal-2'},
      {id: '#telefone'},
      {id: '#texto-tipografia'},
      {id: '#trocar-eixo'},
      {id: '#trocar-inverter-substituir'},
      {id: '#vinculo-link-elo'},
      {id: '#voltar-desfazer'}
    ];

    vm.listaIconesGiss = [
      {id: '#configuracao-atividade'},
      {id: '#configuracao-boleto'},
      {id: '#configuracao-cliente-dias-nao-uteis'},
      {id: '#configuracao-cliente-editar-dados-prefeitura'},
      {id: '#configuracao-cliente-encargos'},
      {id: '#configuracao-cliente-parametros'},
      {id: '#configuracao-declaracao-consultar'},
      {id: '#configuracao-regra-tributacao-responsavel-tributario'},
      {id: '#configuracao-regra-tributacao-visualizar-regra-natureza-operacao'},
      {id: '#configuracao-servicos'},
      {id: '#configuracao-verificar-autenticidade-nfse'},
      {id: '#operacao-atividade'},
      {id: '#operacao-bloqueio-empresa'},
      {id: '#operacao-cadastro-beneficio-por-atividade'},
      {id: '#operacao-cadastro-beneficio-por-empresa'},
      {id: '#operacao-condicao-especial'},
      {id: '#operacao-constituicao-credito-habilitar-compensacao-restituicao'},
      {id: '#operacao-construcao-civil-cadastro-obra'},
      {id: '#operacao-construcao-civil-editar-obra'},
      {id: '#operacao-consultar-abatimento'},
      {id: '#operacao-consultar-beneficio-por-atividade'},
      {id: '#operacao-consultar-beneficio-por-empresa'},
      {id: '#operacao-consultar-deducao-liberacao-atividade'},
      {id: '#operacao-consultar-deducao-liberacao-empresa'},
      {id: '#operacao-conta-corrente-emissao-nota-avulsa'},
      {id: '#operacao-enquadramento-empresa'},
      {id: '#operacao-enviar-arquivo-rps'},
      {id: '#operacao-liberacao-deducao-atividade'},
      {id: '#operacao-liberacao-deducao-empresa'},
      {id: '#operacao-pesquisa-empresa'},
      {id: '#operacao-prestador'},
      {id: '#operacao-prestador-2'},
      {id: '#operacao-regime-especial'},
      {id: '#operacao-regime-iss'},
      {id: '#operacao-rps-obter-nfse'},
      {id: '#operacao-servico'},
      {id: '#operacao-situacao-empresa'},
      {id: '#operacao-vincular-abatimento'}
    ];
  }
})();
