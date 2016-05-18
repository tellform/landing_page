'use strict';


angular.module('core').controller('HomeController', ['$rootScope', '$scope', 
	function($rootScope, $scope) {
		$scope = $rootScope;

        $scope.forms = [
            {
                'background-color': "#fafafa",
                'color': '#292C2F',
                'title': 'Job Application Example',
                'link': 'https://stage.tellform.com/#!/forms/571a76b856d64f9e4ca73ca1'
            },
            {
                'background-color': "#fafafa",
                'color': '#292C2F',
                'title': 'Contact Form Example',
                'link': 'https://stage.tellform.com/#!/forms/57196d592601ed12074eecc0'
            }   
        ];   
    }
]);
