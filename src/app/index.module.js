(function() {
  'use strict';

  angular
    .module('template', 
    	['ngCookies', 
    	'ngSanitize', 
    	'ngMessages', 
    	'ngResource', 
    	'ui.router', 
    	'ui.bootstrap',
    	'MyApp.Vote',
    	'MyApp.Upload',
    	'MyApp.Details',
        'ngFileUpload'
    	])

})();
