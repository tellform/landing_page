'use strict';

angular.module('core').controller('HomeController', ['$scope',
	function($scope) {
		$scope.forms = [
			{
				'backgroundColor': '#fff',
				'color': '#000',
				'title': 'Newsletter Signup Example',
				'link': 'https://example.tellform.com/#!/forms/5765acc1a7fc443c354388b8'
			},
			{
				'backgroundColor': '#f2f2f2',
				'color': '#3B6161',
				'title': 'Contact Form Example',
				'link': 'https://example.tellform.com/#!/forms/5765adf0a7fc443c354388bb'
			},
			{
				'backgroundColor': '#d2d2d2',
				'color': '#941900',
				'title': 'Post-Event Survey Example',
				'link': 'https://example.tellform.com/#!/forms/5765afcda7fc443c354388c2'
			}
		];

	}
]);
