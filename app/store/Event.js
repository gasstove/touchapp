Ext.define('touchapp.store.Event', {
    extend: 'Ext.data.Store',
    requires: [
        'touchapp.model.Event',
        'Ext.data.proxy.JsonP'
    ],

    config: {
        model: 'touchapp.model.Event',
        storeId: 'eventStore',
        autoLoad: false,
        proxy: {
            type: 'jsonp',
            baseurl: apiUrl+'/gs-rest-api/events/',
            appendId: false,
            callbackKey: 'gaswrapper'
        }
    }

});
