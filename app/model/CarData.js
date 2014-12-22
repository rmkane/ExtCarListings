/*
 * File: app/model/CarData.js
 */
Ext.define('CarListingApp.model.CarData', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    fields: [{
        name: 'manufacturer'
    }, {
        name: 'model'
    }, {
        name: 'price'
    }, {
        name: 'wiki'
    }, {
        name: 'img'
    }, {
        name: 'quality'
    }, {
        name: 'makeImage',
        convert: function(value, record) {
            var data = record.getData();
            return data.manufacturer.toLowerCase() + '.png';
        }
    }]
});
