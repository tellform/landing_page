angular.module('NodeForm.templates', []).run(['$templateCache', function($templateCache) {
  "use strict";
  $templateCache.put("../public/modules/core/views/footer.client.view.html",
    "<footer class=footer-basic-centered><div class=footer-company-name><h1>TellForm</h1><small>OPEN SOURCE FORM CREATOR</small><hr></div><p class=footer-links><a href=\"/\">Home</a> <a href=/about>About Us</a> <a href=mailto:polydaic@gmail.com>Contact Us</a> <a href=https://github.com/whitef0x0/tellform>Browse the Source</a> <a href=https://status.tellform.com>System Status</a> <a href=https://admin.tellform.com/#!/signup>Register</a></p><p class=footer-copyright>TellForm © 2016</p></footer>");
  $templateCache.put("../public/modules/core/views/header.client.view.html",
    "<div class=\"navbar navbar-inverse\" data-ng-controller=HeaderController><div class=container-fluid><div class=navbar-header><a href=\"/\" class=navbar-brand><img src=/public/img/logo_white.svg></a></div></div><div class=\"container-fluid text-center\"><nav class=\"collapse navbar-collapse\" role=navigation><ul class=\"nav navbar-nav\"><li><a href=\"/\">Home</a></li><li><a href=/examples>Examples</a></li><li><a href=/faq>FAQ</a></li><li><a href=/about>About</a></li><li><a href=https://api.tellform.com>API</a></li><li><a href=mailto:david.chris.baldwin@gmail.com>Contact</a></li></ul></nav></div></div>");
}]);
