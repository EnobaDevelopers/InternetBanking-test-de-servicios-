(function() {
  'use strict';

  angular
    .module('servicios')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
