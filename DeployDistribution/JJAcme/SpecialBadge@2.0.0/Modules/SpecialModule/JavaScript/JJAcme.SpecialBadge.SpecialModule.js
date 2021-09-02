
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
