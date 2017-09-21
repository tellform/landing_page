'use strict';

angular.module('core').controller('HomeController', ['$scope',
	function($scope) {
		$scope.forms = [
			{
				'backgroundColor': '#f2f2f2',
				'color': '#3B6161',
				'title': 'Contact Form Example',
				'link': 'https://example.tellform.com/#!/forms/598cb96808f341bb1a4f029a'
			},
			{
				'backgroundColor': '#E1E1E1',
				'color': '#941900',
				'title': 'Post-Event Survey Example',
				'link': 'https://example.tellform.com/#!/forms/598cbfdebc19076a1dc78f23'
			}
		];

	}
]);
