(function() {
	'use strict';

	angular
		.module('app')
		.config(config);

		config.$inject = ['$stateProvider','$locationProvider'];

		function config($stateProvider, $locationProvider, $urlRouterProvider) {

			$stateProvider

				.state('listProduct', {
					url:'/product',
					templateUrl:'app/modules/product/templates/product_list',
					controller:'ProductControllerList',
					controllerAs:'vm'
				})
		}
})();