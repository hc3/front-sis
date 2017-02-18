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

			var peoples = [{
				name:'TESTE 01',
				codeInterno:'001',
				tipo:'FISICA',
				endereco:{
					cep:'48970-000',
					rua:'RUA TESTE 01',
					numero:'01',
					bairro:'BAIRRO TESTE 01',
					pais:'PAIS TESTE 01',
					estado:'ESTADO TESTE 01',
					cidade:'CIDADE TESTE 01'
				},
				contato:{
					telefone1:'TELEFONE1 TESTE 01',
					telefone2:'TELEFONE2 TESTE 01',
					email:'EMAIL TESTE 01'
				}
			},
			{
				name:'TESTE 02',
				codeInterno:'002',
				tipo:'FISICA',
				endereco:{
					cep:'48970-000',
					rua:'RUA TESTE 02',
					numero:'02',
					bairro:'BAIRRO TESTE 02',
					pais:'PAIS TESTE 02',
					estado:'ESTADO TESTE 02',
					cidade:'CIDADE TESTE 01'
				},
				contato:{
					telefone1:'TELEFONE1 TESTE 02',
					telefone2:'TELEFONE2 TESTE 02',
					email:'EMAIL TESTE 02'
				}
			},
			{
				name:'TESTE 03',
				codeInterno:'003',
				tipo:'FISICA',
				endereco:{
					cep:'48970-000',
					rua:'RUA TESTE 03',
					numero:'03',
					bairro:'BAIRRO TESTE 03',
					pais:'PAIS TESTE 03',
					estado:'ESTADO TESTE 03',
					cidade:'CIDADE TESTE 03'
				},
				contato:{
					telefone1:'TELEFONE1 TESTE 03',
					telefone2:'TELEFONE2 TESTE 03',
					email:'EMAIL TESTE 03'
				}
			},
			{
				name:'TESTE 04',
				codeInterno:'004',
				tipo:'FISICA',
				endereco:{
					cep:'48970-000',
					rua:'RUA TESTE 04',
					numero:'04',
					bairro:'BAIRRO TESTE 04',
					pais:'PAIS TESTE 04',
					estado:'ESTADO TESTE 04',
					cidade:'CIDADE TESTE 04'
				},
				contato:{
					telefone1:'TELEFONE1 TESTE 04',
					telefone2:'TELEFONE2 TESTE 04',
					email:'EMAIL TESTE 04'
				}
			}];

			return service;

			function newData(data) {
				return $http.post('/api/peoples',data);
				//return peoples.push(data);
			};

			function listOne(id) {
				return $http.get('/api/peoples',{params:id});
			};

			function listAll() {
				return $http.get('/api/peoples');
				//return peoples;
			};

			function edit(data) {
				return $http.put('/api/peoples',{params:id});
			};

			function remove(data) {
				return $http.delete('/api/peoples',{params:id});
			};
		}
})();