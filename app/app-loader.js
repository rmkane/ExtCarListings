/**
 * File: app-loader.js
 */
Ext.Loader.setConfig({
  enabled: true,
  paths: {
    "CarListingApp": "app"
  }
});

Ext.syncRequire(["Ext.Component", "Ext.ComponentManager", "Ext.ComponentQuery"]);
