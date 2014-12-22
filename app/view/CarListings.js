/*
 * File: app/view/CarListings.js
 */
Ext.define('CarListingApp.view.CarListings', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.carListings',
    controller: "CarListingApp.controller.CarListingsController",
    inject: ["globalUtils", "carDataStore", "carChartStore"],
    requires: [
        'Ext.XTemplate',
        'Ext.chart.Chart',
        'Ext.chart.axis.Category',
        'Ext.chart.axis.Numeric',
        'Ext.chart.series.Column'
    ],

    frame: true,
    layout: {
        align: 'stretch',
        type: 'hbox'
    },
    title: 'Car Listing',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [{
                xtype: 'gridpanel',
                itemId: 'listingGrid',
                flex: 0.6,
                store: me.carDataStore,
                columns: [{
                    xtype: 'gridcolumn',
                    dataIndex: 'manufacturer',
                    text: 'Manufacturer',
                    flex: 1
                }, {
                    xtype: 'gridcolumn',
                    dataIndex: 'model',
                    text: 'Model',
                    flex: 1
                }, {
                    xtype: 'gridcolumn',
                    dataIndex: 'price',
                    text: 'Price',
                    renderer: me.globalUtils.currencyRenderer,
                    flex: 1
                }]
            }, {
                xtype: 'container',
                layout: {
                    align: 'stretch',
                    type: 'vbox'
                },
                flex: 1,
                items: [{
                    xtype: 'panel',
                    flex: 0.8,
                    margins: '0 0 0 0',
                    itemId: 'detailPanel',
                    tpl: [
                        '<div class="car-details">',
						    '<img class="car-image" src="data/images/{img}" />',
                            '<img class="make-image" src="resources/logos/{makeImage}" /><br />',
                            '<span class="car-field-label">Manufacturer</span>: {manufacturer}<br />',
                            '<span class="car-field-label">Model</span>: <a href="{wiki}" target="_blank">{model}</a><br />',
                            '<span class="car-field-label">Price</span>: {price:usMoney}<br>',
                        '</div>'
                    ]
                }, {
                    xtype: 'panel',
                    flex: 1,
                    margins: '5 0 0 0',
                    layout: {
                        type: 'fit'
                    },
                    items: [{
                        xtype: 'chart',
                        itemId: 'qualityChart',
                        animate: true,
                        insetPadding: 20,
                        store: me.carChartStore,
                        axes: [{
                            type: 'Category',
                            fields: [
                                'name'
                            ],
                            title: 'Quality',
                            position: 'top'
                        }, {
                            type: 'Numeric',
                            fields: [
                                'rating'
                            ],
                            majorTickSteps: 4,
                            position: 'bottom',
                            title: 'Score',
                            maximum: 5,
                            minimum: 0
                        }],
                        series: [{
                            type: 'column',
                            label: {
                                display: 'insideEnd',
                                field: 'rating',
                                color: '#333',
                                font: '15px Helvetica, sans-serif',
                                'text-anchor': 'middle'
                            },
                            xField: 'name',
                            yField: 'rating',
                            renderer: function(sprite, record, attr, index, store){
                                return Ext.apply(attr, {
                                    fill: '#00BBFF'
                                });
                            }
                        }]
                    }]
                }]
            }]
        });

        me.callParent(arguments);
    }
});
