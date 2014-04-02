define([
	'backbone',
	'communicator',
	'hbs!tmpl/welcome',
	'routers/pj'
],

function( Backbone, Communicator, Welcome_tmpl, pj) {
    'use strict';

	var welcomeTmpl = Welcome_tmpl;

	var App = new Backbone.Marionette.Application();

	/* Add application regions here */
	App.addRegions({});

	/* Add initializers here */
	App.addInitializer( function () {
		
		new pj();

		document.body.innerHTML = welcomeTmpl({ success: "CONGRATS!" });
		Communicator.mediator.trigger("APP:START");

	});

	return App;
});
