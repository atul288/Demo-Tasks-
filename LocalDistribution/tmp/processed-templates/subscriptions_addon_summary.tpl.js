define('subscriptions_addon_summary.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"subscriptions-addon-summary-container\">\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"hasItemPrice") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "\n</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "\n    <h3 class=\"subscriptions-addon-summary-title\">Summary</h3>\n    <div class=\"subscriptions-addon-summary-subtotal-wrapper\">\n        <h4 class=\"subscriptions-addon-summary-subtotal\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Subtotal",{"name":"translate","hash":{},"data":data}))
    + "</h4>\n        <p class=\"subscriptions-addon-summary-grid-float\">\n            <span class=\"subscriptions-addon-summary-grid-left\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"itemQuantity") || (depth0 != null ? compilerNameLookup(depth0,"itemQuantity") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"itemQuantity","hash":{},"data":data}) : helper)))
    + " "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"item",{"name":"translate","hash":{},"data":data}))
    + "(s)</span>\n            <span class=\"subscriptions-addon-summary-grid-right\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"itemPrice") || (depth0 != null ? compilerNameLookup(depth0,"itemPrice") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"itemPrice","hash":{},"data":data}) : helper)))
    + "</span>\n        </p>\n    </div>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasDiscount") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    <div class=\"subscriptions-addon-summary-total\">\n        <p class=\"subscriptions-addon-summary-grid-float\">\n            <span class=\"subscriptions-addon-summary-grid-right\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"itemPriceTotal") || (depth0 != null ? compilerNameLookup(depth0,"itemPriceTotal") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"itemPriceTotal","hash":{},"data":data}) : helper)))
    + "</span>\n            <span class=\"subscriptions-addon-summary-grid-right\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Total",{"name":"translate","hash":{},"data":data}))
    + "</span>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasFrequency") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </p>\n    </div>\n\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "    <div class=\"subscriptions-addon-summary-discount\">\n        <span class=\"subscriptions-addon-summary-grid-left\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Discount ",{"name":"translate","hash":{},"data":data}))
    + " "
    + alias3(((helper = (helper = compilerNameLookup(helpers,"discount") || (depth0 != null ? compilerNameLookup(depth0,"discount") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"discount","hash":{},"data":data}) : helper)))
    + "</span>\n        <span class=\"subscriptions-addon-summary-grid-right\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"discountedValue") || (depth0 != null ? compilerNameLookup(depth0,"discountedValue") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"discountedValue","hash":{},"data":data}) : helper)))
    + "</span>\n    </div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "            <span class=\"subscriptions-addon-summary-grid-right subscriptions-addon-summary-frequency\"><small>"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"frequency") || (depth0 != null ? compilerNameLookup(depth0,"frequency") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"frequency","hash":{},"data":data}) : helper)))
    + "</small></span>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "        <div class=\"subscriptions-addon-summary-discount-by-usage\">\n            <span class=\"subscriptions-addon-summary-grid-left\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"discount") || (depth0 != null ? compilerNameLookup(depth0,"discount") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"discount","hash":{},"data":data}) : helper)))
    + " "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"discount will be applied at billing.",{"name":"translate","hash":{},"data":data}))
    + "</span>\n        </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showSummaryContainer") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/J_J/JJ_Base_Theme/2.0.8/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/J_J/JJ_Base_Theme/2.0.8/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'subscriptions_addon_summary'; return template;});