(function() {
	'use strict';

	angular
		.module('app')
		.service('VehicleService', VehicleService);

		VehicleService.$inject = ['$http'];

		function VehicleService($http) {

			var service = {
				new: newData,
				listOne: listOne,
				listAll: listAll,
				edit: edit,
				remove: remove
			};

			return service;

			function newData(data) {
				return $http.post('/api/vehicles',data);
			};

			function listOne(id) {
				return $http.get('/api/vehicles',{params:id});
			};

			function listAll() {
				return $http.get('/api/vehicles');
			};

			function edit(data) {
				return $http.put('/api/vehicles/'+data._id,data,{params:data});
			};

			function remove(data) {
				return $http.delete('/api/vehicles/'+data,{params:data});
			};
		}
})();