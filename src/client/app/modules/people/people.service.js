(function() {
	'use strict';

	angular
		.module('app')
		.service('PeopleService', PeopleService);

		PeopleService.$inject = ['$http'];

		function PeopleService($http) {

			var service = {
				new: newData,
				listOne: listOne,
				listAll: listAll,
				edit: edit,
				remove: remove
			};

			return service;

			function newData(data) {
				return $http.post('/api/peoples',data);
			};

			function listOne(id) {
				return $http.get('/api/peoples',{params:id});
			};

			function listAll() {
				return $http.get('/api/peoples');
			};

			function edit(data) {
				return $http.put('/api/peoples/'+data._id, data ,{params:data});
			};

			function remove(data) {
				return $http.delete('/api/peoples/'+data,{params:data});
			};
		}
})();