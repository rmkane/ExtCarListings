/**
 * File: app/store/CarDataStore.js
 */
Ext.define('CarListingApp.store.CarDataStore', {
    extend: 'Ext.data.Store',

    requires: [
        'CarListingApp.model.CarData',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],

    sorters: [{
        property: 'price',
        direction: 'DESC'
    }, {
        property: 'manufacturer',
        direction: 'ASC'
    }, {
        property: 'model',
        direction: 'ASC'
    }],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            model: 'CarListingApp.model.CarData',
            storeId: 'MyJsonStore',
            proxy: {
                type: 'ajax',
                url: 'data/cars.json',
                reader: {
                    type: 'json',
                    root: 'data'
                }
            }
        }, cfg)]);
    }
});
