(function() {
	'use strict';

	angular
		.module('app')
		.config(config);

		config.$inject = ['$stateProvider','$locationProvider'];

		function config($stateProvider, $locationProvider, $urlRouterProvider) {

			$stateProvider

				.state('listVehicle', {
					url:'/vehicle',
					templateUrl:'app/modules/vehicle/templates/vehicle_list.html',
					controller:'VehicleControllerList',
					controllerAs:'vm'
				})
		}
})();