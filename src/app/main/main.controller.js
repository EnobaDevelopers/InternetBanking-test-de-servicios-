(function() {
  'use strict';

  angular
    .module('servicios')
    .controller('MainController', MainController);

    MainController.$inject = ["services"]

  /** @ngInject */
  function MainController(services) {
    var vm = this;

    activate();

    function activate() {
      vm.authAction = "Login";

      vm.login = function(){
        services.login().then(function(){
          vm.authAction = "Logout";
        });
      };
    }
  }
})();
