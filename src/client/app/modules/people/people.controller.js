(function() {
	'use strict';

	angular
		.module('app')
		.controller('PeopleControllerNew',PeopleControllerNew)
		.controller('PeopleControllerList', PeopleControllerList)
		.controller('PeopleControllerEdit', PeopleControllerEdit)
		.controller('PeopleControllerView', PeopleControllerView)

	PeopleControllerNew.$inject = ['PeopleService', '$state', '$stateParams'];
	PeopleControllerList.$inject = [];
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
		vm.listPeople = [];
		vm.listAll();

		function listall() {
			vm.listPeople = PeopleService.listAll()
			return vm.listPeople;
		}
	};

	function PeopleControllerEdit() {
		return
	};

	function PeopleControllerView() {
		return
	};



})();