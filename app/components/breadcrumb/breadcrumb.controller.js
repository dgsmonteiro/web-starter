(function() {
    'use strict';

    angular
        .module('starter')
        .controller('breadcrumbController', breadcrumbController);

    breadcrumbController.$inject = ['$state', '$scope'];

    function breadcrumbController($state, $scope) {
        /* jshint validthis: true */
        var vm = this;

        vm.montarBreadcrumb = montarBreadcrumb;

        activate();

        function activate() {
          montarBreadcrumb();
        }

        function montarBreadcrumb(){
          vm.stateCurrent = $state.current;
          vm.routes = vm.stateCurrent.name.split('.');
          vm.states = [];
          vm.auxState = '';
          angular.forEach(vm.routes, function(item){
            vm.auxState = vm.auxState + item + '.';
            vm.stateRoute = vm.auxState.substring(0, vm.auxState.length - 1);
            vm.state = $state.get(vm.stateRoute);
            vm.stateName = vm.state.breadcrumb;
            if (!vm.state.abstract && vm.stateRoute !== 'root.operacao.administrador') {
              vm.states.push(
                {
                  rota: vm.stateRoute,
                  nome: vm.stateName
                }
              );
            }
          });
          vm.states.splice(0,1);
          if (vm.routes.length > 2) {
            vm.exibeVoltar = true;
            vm.stateVoltar = vm.states[vm.states.length - 2].rota;
          } else {
            vm.exibeVoltar = false;
          }
        }

    }
})();
