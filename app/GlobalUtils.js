/*
 * File: app/GlobalUtils.js
 */
Ext.define("CarListingApp.GlobalUtils", {
    config : {
		
	},
	
	statics : {
		toTitleCase : function(str) {
			return str.replace(/\w\S*/g, function(txt){
				return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
			});
		}
	},
	
	toTitleCase : function(s) {
		return CarListingApp.GlobalUtils.toTitleCase(s);
	},
	
	currencyRenderer: function(value, metaData, record) {
		return "$" + Ext.util.Format.number(value, '0,000.00');
	}
});

