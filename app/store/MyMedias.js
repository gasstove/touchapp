Ext.define('touchapp.store.MyMedias', {
    extend: 'Ext.data.Store',
    requires: [
        'touchapp.model.Media',
        'Ext.data.proxy.JsonP'
    ],

    config: {
        model: 'touchapp.model.Media',
        storeId: 'myMediasStore',
        autoLoad: false,
        proxy:{
            type: 'jsonp',
            baseurl: apiUrl+'/gs-rest-api/mediaevents/',
            appendId: false,
            callbackKey: 'gaswrapper'
        }
    }
});
