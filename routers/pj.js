define([
	'backbone'
],
function(Backbone){
    'use strict';

	console.log("call routers/pj.js");

	return Backbone.Router.extend({
		/* Backbone routes hash */
		appRoutes: {
			"pj": function() {
				console.log("teste");
			}
		}
	});
});
