(function() {
  'use strict';

  angular
    .module('template')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, ALLPHOTOS) {
    $stateProvider
      .state(ALLPHOTOS.kVoteState, {
        url: '/',
        templateUrl: 'app/vote/partials/vote.main.html',
        controller: 'VoteController as ctrl'
      })

      .state(ALLPHOTOS.kUploadState, {
      url: '/upload',
      templateUrl: 'app/upload/partials/upload.main.html',
      controller: 'UploadController as ctrl'
    })

      .state(ALLPHOTOS.kDetailsState, {
      url: '/details',
      templateUrl: 'app/details/partials/details.main.html',
      controller: 'DetailsController as ctrl'
    })

    $urlRouterProvider.otherwise('/');
  }

})();
