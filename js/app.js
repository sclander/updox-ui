var app = angular.module('app', [] ); 

app.controller('providerController', function() {
	var controller = this;
	controller.newProvider = {
		last_name: '',
		first_name: '',
		email_address: '',
		specialty: '',
		practice_name: ''
	};

	controller.providers = [
	    {"last_name": "Harris", "first_name": "Mike", "email_address": "mharris@updox.com", "specialty": "Pediatrics", "practice_name": "Harris Pediatrics"},
	    {"last_name": "Wijoyo", "first_name": "Bimo", "email_address": "bwijoyo@updox.com", "specialty": "Podiatry", "practice_name": "Wijoyo Podiatry"},
	    {"last_name": "Rose", "first_name": "Nate", "email_address": "nrose@updox.com", "specialty": "Surgery", "practice_name": "Rose Cutters"},
	    {"last_name": "Carlson", "first_name": "Mike", "email_address": "mcarlson@updox.com", "specialty": "Orthopedics", "practice_name": "Carlson Orthopedics"},
	    {"last_name": "Witting", "first_name": "Mike", "email_address": "mwitting@updox.com", "specialty": "Pediatrics", "practice_name": "Witting's Well Kids Pediatrics"},
	    {"last_name": "Juday", "first_name": "Tobin", "email_address": "tjuday@updox.com", "specialty": "General Medicine", "practice_name": "Juday Family Practice"}
	];

	controller.sortOptions = [
		{'label': 'Last Name', 'value': 'last_name', 'reverse': false},
		{'label': 'Last Name - Reverse', 'value': 'last_name', 'reverse': true},
		{'label': 'First Name', 'value': 'first_name', 'reverse': false},
		{'label': 'First Name - Reverse', 'value': 'first_name', 'reverse': true},
		{'label': 'Email Address', 'value': 'email_address', 'reverse': false},
		{'label': 'Email Address - Reverse', 'value': 'email_address', 'reverse': true},
		{'label': 'Specialty', 'value': 'specialty', 'reverse': false},
		{'label': 'Specialty - Reverse', 'value': 'specialty', 'reverse': true},
		{'label': 'Practice Name', 'value': 'practice_name', 'reverse': false},
		{'label': 'Practice Name - Reverse', 'value': 'practice_name', 'reverse': true}
	];

	controller.addNewProvider = function() {
		controller.providers.push({
			last_name: controller.newProvider.last_name,
			first_name: controller.newProvider.first_name,
			email_address: controller.newProvider.email_address,
			specialty: controller.newProvider.specialty,
			practice_name: controller.newProvider.practice_name
		});
	};

	controller.removeProviders = function() {
		for (var i = controller.providers.length - 1; i > -1; i--) { // Iterating backwards to avoid index errors after deletion 
			if (controller.providers[i].checked) {
				controller.providers.splice(i, 1);
			}
		}
	};
});