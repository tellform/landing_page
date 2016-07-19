angular.module('NodeForm.templates', []).run(['$templateCache', function($templateCache) {
  "use strict";
  $templateCache.put("../public/modules/core/views/header.client.view.html",
    "<div class=\"navbar navbar-inverse\" data-ng-controller=HeaderController><div class=container-fluid><div class=navbar-header><a href=\"/\" class=navbar-brand><i class=\"fa fa-archive\" style=\"padding-right: 0.3em\"></i>Tell<span>Form</span></a></div></div><div class=\"container-fluid text-center\"><div class=text-center><button class=navbar-toggle type=button data-toggle=collapse><span>MENU</span></button></div><nav class=\"collapse navbar-collapse\" role=navigation><ul class=\"nav navbar-nav\"><li><a href=\"/\">Home</a></li><li><a href=/examples>Examples</a></li><li><a href=/faq>FAQ</a></li><li><a href=/about>About</a></li><li><a href=mailto:polydaic@gmail.com>Contact</a></li></ul></nav></div></div>");
}]);
