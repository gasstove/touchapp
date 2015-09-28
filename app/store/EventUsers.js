Ext.define('touchapp.store.EventUsers', {
    extend: 'Ext.data.Store',
    requires: [
        'touchapp.model.User',
        'Ext.data.proxy.JsonP'
    ],

    config: {
        model: 'touchapp.model.User',
        storeId: 'eventusersStore',
        autoLoad: false,
        proxy:{
            type: 'jsonp',
            baseurl: apiUrl+'/gs-rest-api/userevents/event/',
            appendId: false,
            callbackKey: 'gaswrapper'
        }
    }
});
