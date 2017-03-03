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
	PeopleControllerEdit.$inject = ['$mdDialog', 'peopleSelected', 'PeopleService', '$state'];
	PeopleControllerView.$inject = [];
	PeopleControllerRemove.$inject = ['$mdDialog', 'peopleSelected', 'PeopleService', '$state'];

	function cleanForm(form) {
		if (form) {
			service = {};
			form.$setPristine();
			form.$setUntouched();
		}
	};

	function PeopleControllerNew(PeopleService, $state, stateParams, $mdDialog) {
		var vm = this;
		vm.people = {};
		vm.insert = insert;
		vm.cancel = $mdDialog.cancel;
		vm.changeTypePeople = changeTypePeople;
		vm.typePeoplePhysical = false;
		vm.typePeopleLegal = false;

		function insert(form) {
			return PeopleService.new(vm.people)
				.then(function (data) {
					cleanForm(form);
					vm.cancel();
					$state.reload();
				})
				.catch(function (error) {
					console.log(error);
				});
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

	function PeopleControllerEdit($mdDialog, peopleSelected, PeopleService, $state) {
		var vm = this;
		vm.cancel = $mdDialog.cancel;
		vm.insert = insert;
		peopleSelected.map(function(data) {
			vm.people = angular.copy(data)
		});

		function insert(form) {
			return PeopleService.edit(vm.people)
				.then(function(data) {
					console.log(data);
					cleanForm(form);
					vm.cancel();
					$state.reload();
				})
				.catch(function(error) {
					console.log(error);
				})
		};
	};

	function PeopleControllerView() {
		return
	};

	function PeopleControllerRemove($mdDialog, peopleSelected, PeopleService, $state) {
		var vm = this;
		vm.cancel = $mdDialog.cancel;
		vm.remove = remove;

		function remove() {
			return PeopleService.remove(peopleSelected[0]._id)
				.then(function(data) {
					console.log(data);
					vm.cancel();
					$state.reload();
				})
				.catch(function(error) {
					console.log(error);
				})
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
			vm.reload = true
			return PeopleService.listAll()
				.then(function(data) {
					vm.listPeople = data.data;
					vm.reload = false;
				})
				.catch(function(error) {
					console.log(error);
				});
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
			})
		};

		function insert(event) {
			$mdDialog.show({
				clickOutsideToClose: true,
				controller: 'PeopleControllerNew',
				controllerAs: 'vm',
				focusOnOpen: false,
				targetEvent: event,
				templateUrl: 'app/modules/people/templates/people_new.html',
			})
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
			})
		};

	};

})();