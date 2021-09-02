define('print_statement.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "	<a href=\"/\" class=\"print-statement-button-back\">\n	<i class=\"print-statement-back-icon\"></i>\n		"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Back to Account",{"name":"translate","hash":{},"data":data}))
    + "\n	</a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showBackToAccount") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n<section class=\"print-statement\">\n\n	<h2 class=\"print-statement-title\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"pageHeader","hash":{},"data":data}) : helper)))
    + "</h2>\n	<div class=\"print-statement-alert-placeholder\" data-type=\"alert-placeholder\"></div>\n\n	<form class=\"print-statement-form\">\n\n		<small class=\"print-statement-form-label\">\n			"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Required",{"name":"translate","hash":{},"data":data}))
    + "\n			<span class=\"print-statement-form-label-required\">*</span>\n		</small>\n\n		<div class=\"print-statement-form-group\" data-validation=\"control-group\">\n			<label class=\"print-statement-form-group-label\" for=\"statementDate\">\n				"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Statement date",{"name":"translate","hash":{},"data":data}))
    + "\n				<span class=\"print-statement-form-label-required\">*</span>\n			</label>\n			<div  class=\"print-statement-form-controls\" data-validation=\"control\">\n				<input type=\"date\" data-format=\"yyyy-mm-dd\" id=\"statementDate\" name=\"statementDate\" class=\"print-statement-form-group-input\" autocomplete=\"off\" data-todayhighlight=\"true\"/>\n				<i class=\"print-statement-form-input-icon\"></i>\n			</div>\n		</div>\n\n		<div class=\"print-statement-form-group\" data-validation=\"control-group\">\n			<label class=\"print-statement-form-group-label\" for=\"startDate\">\n				"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Start date",{"name":"translate","hash":{},"data":data}))
    + "\n				<span class=\"print-statement-form-group-label-optional\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"(optional)",{"name":"translate","hash":{},"data":data}))
    + "</span>\n			</label>\n			<div  class=\"print-statement-form-controls\" data-validation=\"control\">\n				<input type=\"date\" data-format=\"yyyy-mm-dd\" id=\"startDate\" name=\"startDate\" class=\"print-statement-form-group-input\" autocomplete=\"off\" data-todayhighlight=\"true\"/>\n				<i class=\"print-statement-form-input-icon\"></i>\n			</div>\n		</div>\n\n		<div class=\"print-statement-form-group\">\n			<div class=\"print-statement-form-controls\">\n				<label class=\"print-statement-form-checkbox-label\">\n					<input type=\"checkbox\" name=\"inCustomerLocale\"/>\n					"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Print in customer's locale",{"name":"translate","hash":{},"data":data}))
    + "\n				</label>\n				<label class=\"print-statement-form-checkbox-label\">\n					<input type=\"checkbox\" name=\"openOnly\"/>\n					"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Show only Open Transactions",{"name":"translate","hash":{},"data":data}))
    + "\n				</label>\n				<label class=\"print-statement-form-checkbox-label\">\n					<input type=\"checkbox\" name=\"consolidatedStatement\"/>\n					"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Consolidated Statement",{"name":"translate","hash":{},"data":data}))
    + "\n				</label>\n			</div>\n		</div>\n\n		<div class=\"print-statement-form-actions\">\n			<button type=\"submit\" class=\"print-statement-form-actions-print\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Download as PDF",{"name":"translate","hash":{},"data":data}))
    + "</button>\n			<button type=\"button\" class=\"print-statement-form-actions-email\" data-action=\"email\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Email",{"name":"translate","hash":{},"data":data}))
    + "</button>\n		</div>\n\n	</form>\n\n</section>\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/J_J/JJ_Base_Theme/2.0.8/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/J_J/JJ_Base_Theme/2.0.8/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'print_statement'; return template;});