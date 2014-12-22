/**
 * File: app/application/CarListingsApplication.js
 */
Ext.define("CarListingApp.application.CarListingsApplication", {
    extend: "CarListingApp.application.Application",
    requires: [ "CarListingApp.config.AppConfig",
        "CarListingApp.view.Viewport",
        "CarListingApp.view.CarListings",
        "CarListingApp.store.CarDataStore",
        "CarListingApp.store.CarChartStore" ],

    getInjectorConfig : function() {
        return Ext.apply(this.callParent(arguments), {
            carDataStore: {
				className : "CarListingApp.store.CarDataStore",
				singleton : false
			},
            carChartStore: {
				className : "CarListingApp.store.CarChartStore",
				singleton : false
			}
        });
    }
});
