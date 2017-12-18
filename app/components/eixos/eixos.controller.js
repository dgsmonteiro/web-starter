(function() {
  'use strict';

  angular
    .module('starter')
    .controller('eixosController', eixosController);

  eixosController.$inject = ['$rootScope', 'usuarioLogado'];

  function eixosController($rootScope, usuarioLogado) {
    /* jshint validthis: true */
    var vm = this;

    vm.mudarEixo  = mudarEixo;
    vm.usuarioLogado = usuarioLogado;

    function mudarEixo (indexEixoAtivo) {
      usuarioLogado.eixos.forEach(desativarEixo);
      ativarEixo(indexEixoAtivo);
      $rootScope.$broadcast('headerMudarEixo');
      $rootScope.$broadcast('sidebarMudarEixo');
    }

    function desativarEixo (item) {
      item.ativo = false;
    }

    function ativarEixo (index) {
      usuarioLogado.eixos[index].ativo = true;
    }


    // function activate() {
    //   vm.eixos = [
    //     {eixo: 'Gestão', icone: '#eixo-gestao', ativo: false},
    //     {eixo: 'Configuração', icone: '#eixo-configuracao', ativo: false},
    //     {eixo: 'Monitoração', icone: '#eixo-monitoracao', ativo: false},
    //     {eixo: 'Integração', icone: '#eixo-integracao', ativo: false},
    //     {eixo: 'Operação', icone: '#eixo-operacao', ativo: true}
    //   ];
    //   carregaEixos();
    // }

    // function mudarEixo (eixo) {
    //   angular.forEach(vm.eixos, ativarEixo);
    //   carregaEixos();

    //   function ativarEixo (item) {
    //     if(item.eixo === eixo.eixo) {
    //       item.ativo = true;
    //     }else {
    //       item.ativo = false;
    //     }
    //   }
    // }

    // function carregaEixos() {
    //   vm.eixoAtivo = vm.eixos.filter(function (e) {
    //     return e.ativo === true;
    //   });
    //   vm.eixosNaoAtivos = vm.eixos.filter(function (e) {
    //     return e.ativo === false;
    //   });
    //   $rootScope.$broadcast('sidebarMudarEixo', { eixo: vm.eixoAtivo[0].eixo, icone: vm.eixoAtivo[0].icone });
    //   $rootScope.$broadcast('headerMudarEixo', { eixo: vm.eixoAtivo[0].eixo, icone: vm.eixoAtivo[0].icone });
    // }
  }
})();
