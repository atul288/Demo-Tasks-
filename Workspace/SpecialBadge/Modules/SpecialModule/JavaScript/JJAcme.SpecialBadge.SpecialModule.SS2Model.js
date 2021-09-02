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
