(function() {
	'use strict';

	angular
		.module('app')
		.config(config);

		config.$inject = ['$stateProvider','$locationProvider'];

		function config($stateProvider, $locationProvider, $urlRouterProvider) {

			$stateProvider

				.state('newClient', {
					url:'/client/new',
					templateUrl:'app/modules/client/templates/client_new',
					controller:'ClientControllerNew',
					controllerAs:'vm'
				})

				.state('listClient', {
					url:'/client',
					templateUrl:'app/modules/client/templates/client_list',
					controller:'ClientControllerList',
					controllerAs:'vm'
				})

				.state('editClient', {
					url:'/client/:id/edit',
					templateUrl:'app/modules/client/templates/client_edit',
					controller:'ClientControllerEdit',
					controllerAs:'vm'
				})

				.state('viewClient', {
					url:'/client/:id/view',
					templateUrl:'app/modules/client/templates/client_view',
					controller:'ClientControllerView',
					controllerAs:'vm'
				});

		}
})();