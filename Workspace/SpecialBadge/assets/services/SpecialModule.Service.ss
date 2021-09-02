
function service(request, response)
{
	'use strict';
	try 
	{
		require('JJAcme.SpecialBadge.SpecialModule.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('JJAcme.SpecialBadge.SpecialModule.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}