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
