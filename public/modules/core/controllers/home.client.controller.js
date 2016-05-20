'use strict';


angular.module('core').controller('HomeController', ['$rootScope', '$scope', 
	function($rootScope, $scope) {
		$scope = $rootScope;

        $scope.forms = [
            {
                'background-color': "#E4F8A8",
                'color': '#6D8524',
                'title': 'Job Application Example',
                'link': 'https://stage.tellform.com/#!/forms/571a76b856d64f9e4ca73ca1'
            },
            {
                'background-color': "#F2F2F2",
                'color': '#3B6161',
                'title': 'Contact Form Example',
                'link': 'https://stage.tellform.com/#!/forms/57196d592601ed12074eecc0'
            },
            {
                'background-color': "#FEFEFF",
                'color': '#0F3E5E',
                'title': 'Patient Registration Example',
                'link': 'https://stage.tellform.com/#!/forms/57196d592601ed12074eecc0'
            }   
        ];   
    }
]);
