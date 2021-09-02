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
