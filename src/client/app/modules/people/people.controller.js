(function () {
	'use strict';

	angular
		.module('app')
		.controller('PeopleControllerNew', PeopleControllerNew)
		.controller('PeopleControllerList', PeopleControllerList)
		.controller('PeopleControllerEdit', PeopleControllerEdit)
		.controller('PeopleControllerView', PeopleControllerView)

	PeopleControllerNew.$inject = ['PeopleService', '$state', '$stateParams'];
	PeopleControllerList.$inject = ['PeopleService', '$state', '$stateParams'];
	PeopleControllerEdit.$inject = [];
	PeopleControllerView.$inject = [];


	function PeopleControllerNew(PeopleService, $state, stateParams) {
		var vm = this;
		vm.people = {};

		function insert() {
			return PeopleService.newData(vm.people);
		}
	};

	function PeopleControllerList(PeopleService, $state, stateParams) {
		var vm = this;
		/* VARIAVEIS BINDING */
		vm.listPeople = [];
		vm.selected = [];
		vm.reload = false;
		vm.filter = {
			form:'',
			show:'',
			options:''
		};

		vm.query = {
			order: 'name',
			limit: 5,
			page: 1
		};

		vm.listAll = listAll();
		vm.removeFilter = removeFilter;

		/* FUNÇÕES */
		listAll();
		function listAll() {
			//vm.reload = true; ANTES DO CALLBACK
			vm.listPeople = PeopleService.listAll();
			//vm.reload = false; DEPOIS DO CALLBACK
			//return vm.listPeople;
		};

		function removeFilter() {
			vm.filter.show = false;
			vm.query.filter = '';

			if (vm.filter.form.$dirty) {
				vm.filter.form.$setPristine();
			}
		};

	};

	function PeopleControllerEdit() {
		return
	};

	function PeopleControllerView() {
		return
	};



})();