'use strict';

// Init the application configuration module for AngularJS application
var ApplicationConfiguration = (function() {
	// Init module configuration options
	var applicationModuleName = 'NodeForm';
	var applicationModuleVendorDependencies = ['NodeForm.templates', 'ui.router', 'ui.bootstrap'];

	// Add a new vertical module
	var registerModule = function(moduleName, dependencies) {
		// Create angular module
		angular.module(moduleName, dependencies || []);

		// Add the module to the AngularJS configuration file
		angular.module(applicationModuleName).requires.push(moduleName);
	};

	return {
		applicationModuleName: applicationModuleName,
		applicationModuleVendorDependencies: applicationModuleVendorDependencies,
		registerModule: registerModule
	};
})();

'use strict';

//Start by defining the main module and adding the module dependencies
angular.module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleVendorDependencies);

// Setting HTML5 Location Mode
angular.module(ApplicationConfiguration.applicationModuleName).config(['$locationProvider',
	function($locationProvider) {
		$locationProvider.hashPrefix('!');
	}
]);

//Then define the init function for starting up the application
angular.element(document).ready(function() {
	//Fixing facebook bug with redirect
	if (window.location.hash === '#_=_') window.location.hash = '#!';

	//Then init the app
	angular.bootstrap(document, [ApplicationConfiguration.applicationModuleName]);
});

angular.module('NodeForm.templates', []).run(['$templateCache', function($templateCache) {
  "use strict";
  $templateCache.put("../public/modules/core/views/footer.client.view.html",
    "<div class=\"navbar navbar-inverse\" data-ng-controller=HeaderController><div class=container-fluid><div class=navbar-header><a href=\"/\" class=navbar-brand><i class=\"fa fa-archive\" style=\"padding-right: 0.3em\"></i>Tell<span>Form</span></a></div></div><div class=\"container-fluid text-center\"><nav class=\"collapse navbar-collapse\" role=navigation><ul class=\"nav navbar-nav\"><li><a href=\"/\">Home</a></li><li><a href=/examples>Examples</a></li><li><a href=/faq>FAQ</a></li><li><a href=/about>About</a></li><li><a href=mailto:polydaic@gmail.com>Contact</a></li></ul></nav></div></div>");
  $templateCache.put("../public/modules/core/views/header.client.view.html",
    "<div class=\"navbar navbar-inverse\" data-ng-controller=HeaderController><div class=container-fluid><div class=navbar-header><a href=\"/\" class=navbar-brand><i class=\"fa fa-archive\" style=\"padding-right: 0.3em\"></i>Tell<span>Form</span></a></div></div><div class=\"container-fluid text-center\"><nav class=\"collapse navbar-collapse\" role=navigation><ul class=\"nav navbar-nav\"><li><a href=\"/\">Home</a></li><li><a href=/examples>Examples</a></li><li><a href=/faq>FAQ</a></li><li><a href=/about>About</a></li><li><a href=mailto:polydaic@gmail.com>Contact</a></li></ul></nav></div></div>");
}]);

'use strict';

// Use Application configuration module to register a new module
ApplicationConfiguration.registerModule('core');

'use strict';

angular.module('core').controller('HeaderController', ['$rootScope', '$scope', 'Menus', '$state',
	function ($rootScope, $scope, Menus, $state, Auth, User) {
		$scope.isCollapsed = false;
		$rootScope.hideNav = false;
		$scope.menu = Menus.getMenu('topbar');

		$scope.toggleCollapsibleMenu = function() {
			$scope.isCollapsed = !$scope.isCollapsed;
		};

		// Collapsing the menu after navigation
		$scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
			$scope.isCollapsed = false;
			$rootScope.hideNav = false;
			if ( angular.isDefined( toState.data ) ) {

				if ( angular.isDefined( toState.data.hideNav ) ) {
		        	$rootScope.hideNav = toState.data.hideNav;
		        }
		    }
		});

	}
]);

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

'use strict';

angular.module('core').controller('TestimonialController', ['$scope',
	function($scope) {


		/* Testimonial Carousel */
		$scope.myInterval = 5000;
		$scope.noWrapSlides = false;
		$scope.active = 0;
		var slides = $scope.slides = [];
		var currIndex = 0;

		$scope.addSlide = function() {
			console.log('hello');
			var newWidth = 600 + slides.length + 1;
			slides.push({
				image: '/public/img/photo.png',
				text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
				id: currIndex++
			});
		};

		$scope.randomize = function() {
			var indexes = generateIndexesArray();
			assignNewIndexesToSlides(indexes);
		};

		for (var i = 0; i < 4; i++) {
			$scope.addSlide();
		}

		// Randomize logic below

		function assignNewIndexesToSlides(indexes) {
			for (var i = 0, l = slides.length; i < l; i++) {
				slides[i].id = indexes.pop();
			}
		}

		function generateIndexesArray() {
			var indexes = [];
			for (var i = 0; i < currIndex; ++i) {
				indexes[i] = i;
			}
			return shuffle(indexes);
		}

		// http://stackoverflow.com/questions/962802#962890
		function shuffle(array) {
			var tmp, current, top = array.length;

			if (top) {
				while (--top) {
					current = Math.floor(Math.random() * (top + 1));
					tmp = array[current];
					array[current] = array[top];
					array[top] = tmp;
				}
			}

			return array;
		}

	}
]);

'use strict';

//Menu service used for managing  menus
angular.module('core').service('Menus', [

	function() {
		// Define a set of default roles
		this.defaultRoles = ['*'];

		// Define the menus object
		this.menus = {};

		// A private function for rendering decision 
		var shouldRender = function(user) {
			if (user) {
				if (!!~this.roles.indexOf('*')) {
					return true;
				} else {
					for (var userRoleIndex in user.roles) {
						for (var roleIndex in this.roles) {
							console.log(this.roles[roleIndex]);
							console.log( this.roles[roleIndex] === user.roles[userRoleIndex]);
							if (this.roles[roleIndex] === user.roles[userRoleIndex]) {
								return true;
							}
						}
					}
				}
			} else {
				return this.isPublic;
			}

			return false;
		};

		// Validate menu existance
		this.validateMenuExistance = function(menuId) {
			if (menuId && menuId.length) {
				if (this.menus[menuId]) {
					return true;
				} else {
					throw new Error('Menu does not exists');
				}
			} else {
				throw new Error('MenuId was not provided');
			}

			return false;
		};

		// Get the menu object by menu id
		this.getMenu = function(menuId) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Return the menu object
			return this.menus[menuId];
		};

		// Add new menu object by menu id
		this.addMenu = function(menuId, isPublic, roles) {
			// Create the new menu
			this.menus[menuId] = {
				isPublic: isPublic || false,
				roles: roles || this.defaultRoles,
				items: [],
				shouldRender: shouldRender
			};

			// Return the menu object
			return this.menus[menuId];
		};

		// Remove existing menu object by menu id
		this.removeMenu = function(menuId) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Return the menu object
			delete this.menus[menuId];
		};

		// Add menu item object
		this.addMenuItem = function(menuId, menuItemTitle, menuItemURL, menuItemType, menuItemUIRoute, isPublic, roles, position) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Push new menu item
			this.menus[menuId].items.push({
				title: menuItemTitle,
				link: menuItemURL,
				menuItemType: menuItemType || 'item',
				menuItemClass: menuItemType,
				uiRoute: menuItemUIRoute || ('/' + menuItemURL),
				isPublic: ((isPublic === null || typeof isPublic === 'undefined') ? this.menus[menuId].isPublic : isPublic),
				roles: ((roles === null || typeof roles === 'undefined') ? this.menus[menuId].roles : roles),
				position: position || 0,
				items: [],
				shouldRender: shouldRender
			});

			// Return the menu object
			return this.menus[menuId];
		};

		// Add submenu item object
		this.addSubMenuItem = function(menuId, rootMenuItemURL, menuItemTitle, menuItemURL, menuItemUIRoute, isPublic, roles, position) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Search for menu item
			for (var itemIndex in this.menus[menuId].items) {
				if (this.menus[menuId].items[itemIndex].link === rootMenuItemURL) {
					// Push new submenu item
					this.menus[menuId].items[itemIndex].items.push({
						title: menuItemTitle,
						link: menuItemURL,
						uiRoute: menuItemUIRoute || ('/' + menuItemURL),
						isPublic: ((isPublic === null || typeof isPublic === 'undefined') ? this.menus[menuId].items[itemIndex].isPublic : isPublic),
						roles: ((roles === null || typeof roles === 'undefined') ? this.menus[menuId].items[itemIndex].roles : roles),
						position: position || 0,
						shouldRender: shouldRender
					});
				}
			}

			// Return the menu object
			return this.menus[menuId];
		};

		// Remove existing menu object by menu id
		this.removeMenuItem = function(menuId, menuItemURL) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Search for menu item to remove
			for (var itemIndex in this.menus[menuId].items) {
				if (this.menus[menuId].items[itemIndex].link === menuItemURL) {
					this.menus[menuId].items.splice(itemIndex, 1);
				}
			}

			// Return the menu object
			return this.menus[menuId];
		};

		// Remove existing menu object by menu id
		this.removeSubMenuItem = function(menuId, submenuItemURL) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Search for menu item to remove
			for (var itemIndex in this.menus[menuId].items) {
				for (var subitemIndex in this.menus[menuId].items[itemIndex].items) {
					if (this.menus[menuId].items[itemIndex].items[subitemIndex].link === submenuItemURL) {
						this.menus[menuId].items[itemIndex].items.splice(subitemIndex, 1);
					}
				}
			}

			// Return the menu object
			return this.menus[menuId];
		};

		//Adding the topbar menu
		this.addMenu('topbar', false, ['*']);

		//Adding the bottombar menu for the Form-Footer view
		this.addMenu('bottombar', false, ['*']);
	}
]);