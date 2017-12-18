## Data
Criada em : 03/11/2017

## Uso

1 - HTML
incluir no trecho de HTML onde quer que aparece o breadcrumb
```
<breadcrumb></breadcrumb>
```

2 - ROUTE
incluir no arquivo route da pagina o atributo breadcrumb para mapear o nome (exemplo abaixo)
```
function config($stateProvider) {
  $stateProvider
  .state('root.operacao.declaracao.emitir-nfse', {
    breadcrumb: 'Emitr NFS-e',
    url: '/emitir-nfse',
    views: {
      'conteudo@root': {
        templateUrl: '/app/pages/operacao/declaracao/emitir-nfse/emitir-nfse.view.html',
        controller: 'operacaoDeclaracaoEmitirNfseController as operacaoDeclaracaoEmitirNfse'
      }
    }
  });
}
```

## Observações
