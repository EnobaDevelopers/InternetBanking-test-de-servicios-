(function(){
  'use strict';

  angular
    .module('servicios')
    .factory('myHeader', myHeader);

    myHeader.$inject = ['$sessionStorage'];

    function myHeader($sessionStorage){
      var sessionInjector = {
        request: function(config) {
          if(typeof $sessionStorage.cid !== 'undefined'){
            /******** nota ***********
              cid es fijo para la sesion del usuario.
              ya que estará presente en cada peticion
              se incluye en el interceptor
            ********/

            //este parámetro debe variar en base a la selección del usuario
            config.headers['Accept-Language'] = 'es';

            config.headers['Content-Type'] = 'application/json';
            config.headers['cid'] = $sessionStorage.cid;
          }
          return config;
        }
      };
      return sessionInjector;
    }//end factory (interceptor)

})();
