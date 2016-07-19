'use strict';

angular.module('core').controller('HomeController', ['$rootScope', '$scope', 
	function($rootScope, $scope) {
		$scope = $rootScope;

        $scope.forms = [
            {
                'backgroundColor': '#ff',
                'color': '#000',
                'title': 'Newsletter Signup Example',
                'link': 'https://example.tellform.com/#!/forms/5765acc1a7fc443c354388b8'
            },
            {
                'backgroundColor': "#F2F2F2",
                'color': '#3B6161',
                'title': 'Contact Form Example',
                'link': 'https://example.tellform.com/#!/forms/5765adf0a7fc443c354388bb'
            },
            {
                'backgroundColor': "#d2d2d2",
                'color': '#941900',
                'title': 'Post-Event Survey Example',
                'link': 'https://example.tellform.com/#!/forms/5765afcda7fc443c354388c2'
            },
            {
                'backgroundColor': '#f1f3f5',
                'color': '#000',
                'title': 'Market Research Survey Example',
                'link': 'https://example.tellform.com/#!/forms/5765b23fa7fc443c354388d2'
            } 
        ];   
    }
]);
