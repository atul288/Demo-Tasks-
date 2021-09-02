var extensions = {};

extensions['JJAcme.SpecialBadge.2.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/JJAcme/SpecialBadge/2.0.0/' + asset;
}

// @module JJAcme.SpecialBadge.SpecialModule
define('JJAcme.SpecialBadge.SpecialModule.View'
,	[
	'jjacme_specialbadge_specialmodule.tpl'
	
	,	'JJAcme.SpecialBadge.SpecialModule.SS2Model'
	
	,	'Backbone'
    ]
, function (
	jjacme_specialbadge_specialmodule_tpl
	
	,	SpecialModuleSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class JJAcme.SpecialBadge.SpecialModule.View @extends Backbone.View
	return Backbone.View.extend({

		template: jjacme_specialbadge_specialmodule_tpl

	,	initialize: function (options) {

		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return JJAcme.SpecialBadge.SpecialModule.View.Context
	,	getContext: function getContext()
		{
			//@class JJAcme.SpecialBadge.SpecialModule.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});


// Model.js
// -----------------------
// @module Case
define("JJAcme.SpecialBadge.SpecialModule.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/SpecialModule.Service.ss"
            )
        )
        
});
});


// Model.js
// -----------------------
// @module Case
define("JJAcme.SpecialBadge.SpecialModule.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/SpecialModule/SuiteScript2/SpecialModule.Service.ss"
            ),
            true
        )
});
});



define(
	'JJAcme.SpecialBadge.SpecialModule'
,   [
		'JJAcme.SpecialBadge.SpecialModule.View'
	]
,   function (
		SpecialModuleView
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			var cart = container.getComponent('Cart');

			// cart.getLatestAddition().then(function(line) {
			//
			// 	if (line) {
			// 		var lastItemAddedId = line.internalid;
			// 		var lastItemAddedName = line.item.displayname;
			// 		console.log(line)
			//
			// 		cart.removeLine({
			// 			line_id: lastItemAddedId
			// 		}).then(function() {
			// 			cart.showMessage({
			// 				message: lastItemAddedName + ' was removed from the cart.',
			// 				type: 'info'
			// 			})
			// 		});
			// 		console.log(item)
			// 	}
			//
			// });

		}
	};
});


};

SC.ENVIRONMENT.EXTENSIONS_JS_MODULE_NAMES = ["JJAcme.SpecialBadge.SpecialModule.View","JJAcme.SpecialBadge.SpecialModule.Model","JJAcme.SpecialBadge.SpecialModule.SS2Model"];
try{
	extensions['JJAcme.SpecialBadge.2.0.0']();
	SC.addExtensionModule('JJAcme.SpecialBadge.SpecialModule');
}
catch(error)
{
	console.error(error);
}

