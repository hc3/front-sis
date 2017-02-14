(function() {
	'use strict';

	angular
		.module('app')
		.config(config);

		config.$inject = ['$stateProvider','$locationProvider'];

		function config($stateProvider, $locationProvider, $urlRouterProvider) {

			$stateProvider

				.state('listService', {
					url:'/service',
					templateUrl:'app/modules/service/templates/service_list',
					controller:'ServiceControllerList',
					controllerAs:'vm'
				})
		}
})();