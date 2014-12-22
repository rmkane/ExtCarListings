/*
 * File: app/view/Viewport.js
 */
Ext.define("CarListingApp.view.Viewport", {
    extend: "Ext.container.Viewport",
    requires: ["CarListingApp.view.CarListings"],
    layout: {
        type: "vbox",
        align: "stretch"
    },
    initComponent: function() {
        Ext.applyIf(this, {
            items: [{
				xtype : "carListings"
            }]
        });
        return this.callParent(arguments);
    }
});
