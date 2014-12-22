/**
 * File: Application.js
 */
Ext.define("CarListingApp.Application", {
    extend: "Deft.mvc.Application",
    requires: [ "CarListingApp.config.AppConfig",
        "CarListingApp.view.Viewport",
        "CarListingApp.view.CarListings",
        "CarListingApp.store.CarDataStore",
        "CarListingApp.store.CarChartStore" ],

    /**
     * init() runs when Ext.onReady() is called.
     */
    init: function() {
        this.beforeInit();
        Deft.Injector.configure(this.buildInjectorConfiguration());
        Deft.promise.Deferred.enableLogging = false;
        return this.afterInit();
    },

    /**
     * @protected
     * Returns the configuration object to pass to Deft.Injector.configure(). Override in subclasses to alter the Injector configuration before returning the config object.
     * @return {Object} The Injector configuration object.
     */
    buildInjectorConfiguration: function() {
        var config;
        config = {
            appConfig: {
                className: "CarListingApp.config.AppConfig",
                parameters: [{
                    environment: CarListingApp.config.AppConfig.PRODUCTION_ENV
                }]
            },
            carDataStore: "CarListingApp.store.CarDataStore",
            carChartStore: "CarListingApp.store.CarChartStore",
        };
        return config;
    },

    /**
     * @protected
     * Runs at the start of the init() method. Override in subclasses if needed.
     */
    beforeInit: function() {},

    /**
     * @protected
     * Runs at the end of the init() method. Useful to create initial Viewport, start Jasmine tests, etc.
     */
    afterInit: function() {
        Ext.tip.QuickTipManager.init();
        return Ext.create("CarListingApp.view.Viewport");
    }
});
