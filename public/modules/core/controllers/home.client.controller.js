'use strict';

angular.module('core').controller('HomeController', ['$rootScope', '$scope', 
	function($rootScope, $scope) {
		$scope = $rootScope;

        $scope.forms = [
            {
                'backgroundColor': '#E4F8A8',
                'color': '#33334C',
                'title': 'Job Application Example',
                'link': 'https://stage.tellform.com/#!/forms/571a76b856d64f9e4ca73ca1'
            },
            {
                'backgroundColor': "#F2F2F2",
                'color': '#3B6161',
                'title': 'Contact Form Example',
                'link': 'https://stage.tellform.com/#!/forms/57196d592601ed12074eecc0'
            },
            {
                'backgroundColor': "#FAFBFF",
                'color': '#2D4A6C',
                'title': 'Patient Registration Example',
                'link': 'https://stage.tellform.com/#!/forms/573f8329d18419854559c29c'
            },
            {
                'backgroundColor': '#F7F7F7',
                'color': '#2F6B99',
                'title': 'Event Registration Form Example',
                'link': 'https://stage.tellform.com/#!/forms/571971c72471261f0af3683e'
            } 
        ];   
    }
]);
