(function () {
	'use strict';

	angular
		.module('app')
		.controller('VehicleControllerNew', VehicleControllerNew)
		.controller('VehicleControllerList', VehicleControllerList)
		.controller('VehicleControllerEdit', VehicleControllerEdit)
		.controller('VehicleControllerView', VehicleControllerView)
		.controller('VehicleControllerRemove', VehicleControllerRemove)

	VehicleControllerNew.$inject = ['VehicleService', '$state', '$stateParams', '$mdDialog', 'PeopleService', '$timeout'];
	VehicleControllerList.$inject = ['VehicleService', '$state', '$stateParams', '$mdDialog', 'PeopleService', '$timeout'];
	VehicleControllerView.$inject = [];
	VehicleControllerEdit.$inject = ['$mdDialog', 'vehicleSelected', 'VehicleService', '$state'];
	VehicleControllerRemove.$inject = ['$mdDialog', 'vehicleSelected', 'VehicleService', '$state'];

	function cleanForm(form) {
		if (form) {
			service = {};
			form.$setPristine();
			form.$setUntouched();
		}
	};

	function VehicleControllerNew(VehicleService, $state, stateParams, $mdDialog, PeopleService, $timeout) {
		var vm = this;
		vm.reload = false;
		vm.vehicle = {};
		vm.listPeople = [];
		vm.insert = insert;
		vm.cancel = $mdDialog.cancel;
		vm.listAllPeople = listAllPeople;
		vm.clearSearchTerm = clearSearchTerm;

		function insert(form) {
			return VehicleService.new(vm.vehicle)
				.then(function (data) {
					cleanForm(form);
					vm.cancel();
					$state.reload();
				})
				.catch(function (error) {
					console.log(error);
				});
		};

		function clearSearchTerm() {
			vm.searchTerm = '';
		};

		function listAllPeople() {
			console.log('to aqui');
			return $timeout(function () {
				PeopleService.listAll()
					.then(function (data) {
						vm.listPeople = data.data;
					})
					.catch(function (error) {
						console.log(error);
					})

			}, 650);
		}
	};

	function VehicleControllerEdit($mdDialog, vehicleSelected, VehicleService, $state) {
		var vm = this;
		vm.cancel = $mdDialog.cancel;
		vm.insert = insert;
		//vm.vehicle = 
		vehicleSelected.map(function (data) {
			vm.vehicle = angular.copy(data)
		});

		function insert(form) {
			return VehicleService.edit(vm.vehicle)
				.then(function (data) {
					console.log(data);
					cleanForm(form);
					vm.cancel();
					$state.reload();
				})
				.catch(function (error) {
					console.log(error);
				})
		};
	};

	function VehicleControllerView() {
		return
	};

	function VehicleControllerRemove($mdDialog, vehicleSelected, VehicleService, $state) {
		var vm = this;
		vm.cancel = $mdDialog.cancel;
		vm.remove = remove;

		function remove() {
			return VehicleService.remove(vehicleSelected[0]._id)
				.then(function (data) {
					console.log(data);
					vm.cancel();
					$state.reload();
				})
				.catch(function (error) {
					console.log(error);
				})
		};
	};

	function VehicleControllerList(VehicleService, $state, stateParams, $mdDialog, PeopleService, $timeout) {
		var vm = this;
		/* VARIAVEIS BINDING */
		vm.listVehicle = [];
		vm.listPeople = [];
		vm.selected = [];
		vm.reload = false;
		vm.searchTerm = '';
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
		vm.listAllPeople = listAllPeople;
		vm.clearSearchTerm = clearSearchTerm;
		/* -------------------- */

		/* FUNÇÕES */
		listAll();

		function clearSearchTerm() {
			vm.searchTerm = '';
		};

		function listAllPeople() {
			console.log('to aqui');
			return $timeout(function () {
				PeopleService.listAll()
					.then(function (data) {
						vm.listPeople = data.data;
					})
					.catch(function (error) {
						console.log(error);
					})

			}, 650);
		}

		function listAll() {
			vm.reload = true
			return VehicleService.listAll()
				.then(function (data) {
					vm.listVehicle = data.data;
					vm.reload = false;
				})
				.catch(function (error) {
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
				controller: 'VehicleControllerRemove',
				controllerAs: 'vm',
				focusOnOpen: false,
				targetEvent: event,
				locals: {
					vehicleSelected: vm.selected
				},
				templateUrl: 'app/modules/vehicle/templates/delete-dialog.html',
			})
		};

		function insert(event) {
			$mdDialog.show({
				clickOutsideToClose: true,
				controller: 'VehicleControllerNew',
				controllerAs: 'vm',
				focusOnOpen: false,
				targetEvent: event,
				templateUrl: 'app/modules/vehicle/templates/vehicle_new.html',
			})
		};

		function edit(event) {
			$mdDialog.show({
				clickOutsideToClose: true,
				controller: 'VehicleControllerEdit',
				controllerAs: 'vm',
				focusOnOpen: false,
				targetEvent: event,
				locals: {
					vehicleSelected: vm.selected
				},
				templateUrl: 'app/modules/vehicle/templates/vehicle_new.html',
			})
		};

	};

})();