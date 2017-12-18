(function() {
  'use strict';

  angular
    .module('starter')
    .service('login', login);

  login.$inject = ['sessaoMockUp', 'usuarioLogado', 'sessao'];

  function login(sessaoMockUp, usuarioLogado, sessao) {
    /* jshint validthis: true */
    this.logar = logar;

    function logar(data) {
      if(data.usuario === data.senha){
        this.usuarioFake = {};
        /* jshint ignore:start */
        this.usuarioFake = {
          id: 1,
          nome: "Luiz Alberto",
          dados: "eyJub21lIjogIkx1aXoiLCAiZm90byI6ICIuLi8uLi8uLi9pbWFnZXMvcGxhY2Vob2xkZXIvaW1nLXVzZXIucG5nIiwgImlwIjogIjE5Mi4xNjguMC4yNjU1LjUiLCAidWx0aW1vQWNlc3NvIjogIjMwLzEyLzIwMTYgw6BzIDEzOjU1IiwgInBlcmZpbCI6IFt7InRpdHVsbyI6InRvbWFkb3IiLCAiYXRpdm8iOiB0cnVlfSwgeyJ0aXR1bG8iOiAiYWRtaW5pc3RyYWRvciIsICJhdGl2byI6IGZhbHNlfSBdLCAiZWl4b3MiOiBbeyJub21lIjogIkdlc3TDo28iLCAgICAgICAicm90YSI6ICJnZXN0YW8iLCAgICAgICAiaWNvbmUiOiAiI2VpeG8tZ2VzdGFvIiwgICAgICAgImF0aXZvIjogZmFsc2V9LCB7Im5vbWUiOiAiQ29uZmlndXJhw6fDo28iLCAicm90YSI6ICJjb25maWd1cmFjYW8iLCAiaWNvbmUiOiAiI2VpeG8tY29uZmlndXJhY2FvIiwgImF0aXZvIjogZmFsc2V9LCB7Im5vbWUiOiAiTW9uaXRvcmHDp8OjbyIsICAicm90YSI6ICJtb25pdG9yYWNhbyIsICAiaWNvbmUiOiAiI2VpeG8tbW9uaXRvcmFjYW8iLCAgImF0aXZvIjogZmFsc2V9LCB7Im5vbWUiOiAiSW50ZWdyYcOnw6NvIiwgICAicm90YSI6ICJpbnRlZ3JhY2FvIiwgICAiaWNvbmUiOiAiI2VpeG8taW50ZWdyYWNhbyIsICAgImF0aXZvIjogZmFsc2V9LCB7Im5vbWUiOiAiT3BlcmHDp8OjbyIsICAgICAicm90YSI6ICJvcGVyYWNhbyIsICAgICAiaWNvbmUiOiAiI2VpeG8tb3BlcmFjYW8iLCAgICAgImF0aXZvIjogdHJ1ZX0gXSwgInByb2R1dG9zIjogWyJHaWV4IiwgImlDYWQiLCAiUHJ1YyIsICJBY3RvIiwgIlNpc3MiLCAiR0RFIiwgIkdpdmFmIiwgIkNlZCJdLCAiZW1wcmVzYXMiOiBbXSB9"
        };
        /* jshint ignore:end */
        return retornoLogar(this.usuarioFake);
      } else {return erroAoLogar(data);}


      // return sessaoMockUp
      //   .oneUrl('/usuarios')
      //   .one(data.senha)
      //   .get()
      //   .then(retornoLogar)
      //   .catch(erroAoLogar);
    }
    function retornoLogar(data) {
      usuarioLogado.criarUsuarioLogado(data.dados, data.id);
      sessao.criarSessao(data.dados);
      return true;
    }
    function erroAoLogar(erro) {

      return false;
    }
  }
})();
