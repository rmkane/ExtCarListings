/**
 * File: app/application/Application.js
 */
Ext.define("CarListingApp.application.Application", {
    extend: "Deft.mvc.Application",
    requires: [ "CarListingApp.config.AppConfig",
        "CarListingApp.view.Viewport" ],

	config : {
		injectorConfig : {},
	},

	appDependencies : null,

    /**
     * init() runs when Ext.onReady() is called.
     */
    init : function() {
        this.beforeInit();
        this.configureInjector(this.injectorConfig),
        this.globalUtils = Deft.Injector.resolve("globalUtils", this);
        Deft.promise.Deferred.enableLogging = false;
        return this.afterInit();
    },

    /**
     * @protected
     * Returns the configuration object to pass to Deft.Injector.configure(). Override in subclasses to alter the Injector configuration before returning the config object.
     * @return {Object} The Injector configuration object.
     */
    getInjectorConfig : function() {
        return {
            appConfig: {
                className: "CarListingApp.config.AppConfig",
                parameters: [{
                    environment: CarListingApp.config.AppConfig.PRODUCTION_ENV
                }]
            },
            globalUtils : "CarListingApp.GlobalUtils"
        };
    },

    /**
     * @protected
     * Runs at the start of the init() method. Override in subclasses if needed.
     */
    beforeInit : function() {
		this.appDependencies = Ext.create("CarListingApp.application.ApplicationDependencies");
	},

    /**
     * @protected
     * Runs at the end of the init() method. Useful to create initial Viewport, start Jasmine tests, etc.
     */
    afterInit : function() {
        Ext.tip.QuickTipManager.init();
        return Ext.create("CarListingApp.view.Viewport");
    },

    configureInjector : function(config) {
		config = Ext.merge(this.getInjectorConfig(), config);

		Deft.Injector.configure(config);
	}
});
