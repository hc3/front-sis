(function() {
	'use strict';

	angular
		.module('app')
		.service('ServiceService', ServiceService);

		ServiceService.$inject = ['$http'];

		function ServiceService($http) {

			var service = {
				new: newData,
				listOne: listOne,
				listAll: listAll,
				edit: edit,
				remove: remove
			};

			return service;

			function newData(data) {
				return $http.post('/api/services',data);
			};

			function listOne(id) {
				return $http.get('/api/services',{params:id});
			};

			function listAll() {
				return $http.get('/api/services');
			};

			function edit(data) {
				return $http.put('/api/services/'+data._id,data,{params:data});
			};

			function remove(data) {
				return $http.delete('/api/services/'+data,{params:data});
			};
		}
})();