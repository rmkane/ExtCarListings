/*
 * File: app/model/CarChart.js
 */
Ext.define('CarListingApp.model.CarChart', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    fields: [{
        name: 'name'
    }, {
        name: 'rating'
    }]
});
