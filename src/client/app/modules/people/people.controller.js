(function () {
	'use strict';

	angular
		.module('app')
		.controller('PeopleControllerNew', PeopleControllerNew)
		.controller('PeopleControllerList', PeopleControllerList)
		.controller('PeopleControllerEdit', PeopleControllerEdit)
		.controller('PeopleControllerView', PeopleControllerView)
		.controller('PeopleControllerRemove', PeopleControllerRemove)

	PeopleControllerNew.$inject = ['PeopleService', '$state', '$stateParams', '$mdDialog'];
	PeopleControllerList.$inject = ['PeopleService', '$state', '$stateParams', '$mdDialog'];
	PeopleControllerEdit.$inject = ['$mdDialog', 'peopleSelected'];
	PeopleControllerView.$inject = [];
	PeopleControllerRemove.$inject = ['$mdDialog', 'peopleSelected'];


	function PeopleControllerNew(PeopleService, $state, stateParams, $mdDialog) {
		var vm = this;
		vm.people = {};
		vm.teste = "testando";
		vm.insert = insert;
		vm.cancel = $mdDialog.cancel;
		vm.changeTypePeople = changeTypePeople;
		vm.typePeoplePhysical = false;
		vm.typePeopleLegal = false;

		function insert() {
			console.log('to no insert');
			console.log(vm.people);
			//return PeopleService.newData(vm.people);
		};

		function changeTypePeople(type) {
			vm.typePeoplePhysical = false;
			vm.typePeopleLegal = false;
			if (type == 1) {
				vm.typePeopleLegal = true;
			}
			if (type == 0) {
				vm.typePeoplePhysical = true;
			} else {
				return null;
			}
		};
	};

	function PeopleControllerList(PeopleService, $state, stateParams, $mdDialog) {
		var vm = this;
		/* VARIAVEIS BINDING */
		vm.listPeople = [];
		vm.selected = [];
		vm.reload = false;
		vm.filter = {
			form: '',
			show: '',
			options: ''
		};
		vm.query = {
			order: 'name',
			limit: 5,
			page: 1
		};
		vm.listAll = listAll();
		vm.cancel = $mdDialog.cancel;
		vm.removeFilter = removeFilter;
		vm.delete = remove;
		vm.insert = insert;
		vm.edit = edit;


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

		function remove(event) {
			$mdDialog.show({
				clickOutsideToClose: true,
				controller: 'PeopleControllerRemove',
				controllerAs: 'vm',
				focusOnOpen: false,
				targetEvent: event,
				locals: {
					peopleSelected: vm.selected
				},
				templateUrl: 'app/modules/people/templates/delete-dialog.html',
			}).then(vm.listAll);
		};

		function insert(event) {
			$mdDialog.show({
				clickOutsideToClose: true,
				controller: 'PeopleControllerNew',
				controllerAs: 'vm',
				focusOnOpen: false,
				targetEvent: event,
				templateUrl: 'app/modules/people/templates/people_new.html',
			}).then(vm.listAll);
		};

		function edit(event) {
			$mdDialog.show({
				clickOutsideToClose: true,
				controller: 'PeopleControllerEdit',
				controllerAs: 'vm',
				focusOnOpen: false,
				targetEvent: event,
				locals: {
					peopleSelected: vm.selected
				},
				templateUrl: 'app/modules/people/templates/people_new.html',
			}).then(vm.listAll);
		};

	};

	function PeopleControllerEdit($mdDialog, peopleSelected) {
		var vm = this;
		vm.cancel = $mdDialog.cancel;
		vm.insert = insert;
		vm.people = peopleSelected[0];

		function insert() {
			console.log('people selected',peopleSelected);
			console.log('people',vm.people);
		};
	};

	function PeopleControllerView() {
		return
	};

	function PeopleControllerRemove($mdDialog, peopleSelected) {
		var vm = this;
		vm.cancel = $mdDialog.cancel;

		vm.removePeople = removePeople;

		function removePeople() {
			console.log('removendo pessoa', peopleSelected[0].codeInterno);
		}
		//console.log('MDDIALOG',people);
	};



})();