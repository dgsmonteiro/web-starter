## Data
Criada em : 01/08/2017

## Uso
1 - HTML
incluir no trecho de HTML onde quer que aparece o componente

```
<wizard>
  <steps stepcollection="step 1, step 2, step 3"></steps>
  <div ng-if="step == 1">
    <div ng-include="'/app/pages/configuracao/regra-tributacao/configurar-regra/wizard/passos/passo-1.view.html'"></div>
  </div>
  <div ng-if="step == 2">
    <div ng-include="'/app/pages/configuracao/regra-tributacao/configurar-regra/wizard/passos/passo-2.view.html'"></div>
  </div>
  <div ng-if="step == 3">
    <div ng-include="'/app/pages/configuracao/regra-tributacao/configurar-regra/wizard/passos/passo-3.view.html'"></div>
  </div>
</wizard>

```

## Observações
diretiva que cria os formularios wizard do sistema.

steps stepcollection -> é outro componente onde voce passa os nomes do steps separados por ","
porem coloquei o exemplo completo do usu do wizard com os steps
