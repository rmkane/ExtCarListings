/*
 * File: app/store/CarChartStore.js
 */
Ext.define('CarListingApp.store.CarChartStore', {
    extend: 'Ext.data.Store',
    requires: [
        'CarListingApp.model.CarChart'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'CarListingApp.model.CarChart',
            storeId: 'MyStore'
        }, cfg)]);
    }
});
