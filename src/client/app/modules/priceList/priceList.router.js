(function() {
	'use strict';

	angular
		.module('app')
		.config(config);

		config.$inject = ['$stateProvider','$locationProvider'];

		function config($stateProvider, $locationProvider, $urlRouterProvider) {

			$stateProvider

				.state('listPriceList', {
					url:'/priceList',
					templateUrl:'app/modules/priceList/templates/priceList_list',
					controller:'PriceListControllerList',
					controllerAs:'vm'
				})
		}
})();