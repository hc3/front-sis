(function() {
	'use strict';

	angular
		.module('app')
		.service('ProductService', ProductService);

		ProductService.$inject = ['$http'];

		function ProductService($http) {

			var service = {
				new: newData,
				listOne: listOne,
				listAll: listAll,
				edit: edit,
				remove: remove
			};

			return service;

			function newData(data) {
				return $http.post('/api/products',data);
			};

			function listOne(id) {
				return $http.get('/api/products',{params:id});
			};

			function listAll() {
				return $http.get('/api/products');
			};

			function edit(data) {
				return $http.put('/api/products/'+data._id,data,{params:data});
			};

			function remove(data) {
				return $http.delete('/api/products/'+data,{params:data});
			};
		}
})();