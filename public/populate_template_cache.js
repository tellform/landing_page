angular.module('NodeForm.templates', []).run(['$templateCache', function($templateCache) {
  "use strict";
  $templateCache.put("../public/modules/core/views/header.client.view.html",
    "<section class=\"navbar navbar-fixed-top navbar-inverse\" data-ng-controller=HeaderController ng-hide=hideNav><div class=container><div class=navbar-header><button class=navbar-toggle type=button data-ng-click=toggleCollapsibleMenu()><span>MENU</span></button> <a href=\"/\" class=navbar-brand><i class=\"fa fa-archive\" style=\"padding-right: 0.3em\"></i>Tell<span>Form</span></a></div><nav class=\"collapse navbar-collapse\" collapse=!isCollapsed role=navigation><ul class=\"nav navbar-nav navbar-right\"><li><a href=/examples>Example Forms</a></li><li><a href=https://admin.tellform.com/#!/signup>Sign Up</a></li><li class=divider-vertical></li><li><a href=https://admin.tellform.com/#!/signin>Sign In</a></li></ul></nav></div></section>");
}]);
