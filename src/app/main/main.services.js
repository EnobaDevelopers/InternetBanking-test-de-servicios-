(function(){
  'use strict';

  angular
    .module("servicios")
    .service("services", services);

  services.$inject = ["$http", "$sessionStorage", "myConfig"];

  function services($http, $sessionStorage, myConfig, $scope){
    /*
      ========================
      SERVICIO DE LOGIN
      ========================
    */
    this.login = function(){
      var req = {
        method: 'POST',
        url: myConfig.url+"/auth/login",
        data: {
          "userInfo": {
            "phoneNumber": "string",
            "email": "string"
          },
          "password": "any",
          "personalId": "string",
          "requestDeviceToken": true,
          "clientInfo": {
            "model": "string",
            "location": {
              "latitude": 0,
              "name": "string",
              "longitude": 0
            },
            "brand": "string"
          },
          "applicationInfo": {
            "version": "string",
            "platform": "string"
          },
          "deviceToken": "string",
          "username": "john.doe"
        },
        headers: {
         "X-Channel": "web"
       },
      };

      return $http(req).then(function(result){
        //callback de exito
        console.log("Login exitoso! :)");
        console.log(result.data);

        //cid
        $sessionStorage.cid = result.data.cid;
        return true;
      }, function(result){
        //callback de fracaso
        console.log("Se ha producido un error :(");
        console.log(result);
        return false;
      });
    };


  }
})();
