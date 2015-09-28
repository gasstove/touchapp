Ext.define('touchapp.store.Contacts', {
    extend: 'Ext.data.Store',
    requires: [
        'touchapp.model.User',
        'Ext.data.proxy.JsonP'
    ],

    config: {
        model: 'touchapp.model.User',
        storeId: 'contactsStore',
        autoLoad: true,
        proxy: {
            type: 'jsonp',
            url: apiUrl + '/gs-rest-api/users/',
            appendId: false,
            callbackKey: 'gaswrapper'
        }
    }

});
