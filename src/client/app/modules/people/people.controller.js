(function () {
	'use strict';

	angular
		.module('app')
		.controller('PeopleControllerNew', PeopleControllerNew)
		.controller('PeopleControllerList', PeopleControllerList)
		.controller('PeopleControllerEdit', PeopleControllerEdit)
		.controller('PeopleControllerView', PeopleControllerView)
		.controller('PeopleControllerRemove', PeopleControllerRemove)

	PeopleControllerNew.$inject = ['PeopleService', '$state', '$stateParams'];
	PeopleControllerList.$inject = ['PeopleService', '$state', '$stateParams','$mdDialog'];
	PeopleControllerEdit.$inject = [];
	PeopleControllerView.$inject = [];
	PeopleControllerRemove.$inject = ['$mdDialog','peopleSelected'];


	function PeopleControllerNew(PeopleService, $state, stateParams) {
		var vm = this;
		vm.people = {};

		function insert() {
			return PeopleService.newData(vm.people);
		}
	};

	function PeopleControllerList(PeopleService, $state, stateParams, $mdDialog) {
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
		vm.delete = remove;
		vm.insert = insert;


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
		      locals: { peopleSelected: vm.selected },
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
	  	}

	};

	function PeopleControllerEdit() {
		return
	};

	function PeopleControllerView() {
		return
	};

	function PeopleControllerRemove($mdDialog,peopleSelected) {
		var vm = this;
		vm.cancel = $mdDialog.cancel;
		
		vm.removePeople = removePeople;

		function removePeople() {
			console.log('removendo pessoa',peopleSelected[0].codeInterno);
		}
		//console.log('MDDIALOG',people);
	};



})();