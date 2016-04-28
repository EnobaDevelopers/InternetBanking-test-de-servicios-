(function() {
  'use strict';

  angular
    .module(
      'servicios',
      [
        'ngAnimate',
        'ngCookies',
        'ngTouch',
        'ngSanitize',
        'ngMessages',
        'ngAria',
        'ui.router',
        'ui.bootstrap',
        'toastr',
        'ngStorage'
      ]
    )
    //inyeccion del interceptor
    .constant('myConfig', {
      'url': 'https://bancaplus-demo.synergy-gb.com/bancaplus/v3'
    })
    .config(['$httpProvider', function($httpProvider){
      $httpProvider.interceptors.push('myHeader');
    }]);

})();
