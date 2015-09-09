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
            baseurl: 'http://52.10.166.27:8080/gs-rest-api/mediaevents/',
            // baseurl: touchapp.apiUrl + '/gs-rest-api/mediaevents/',
            appendId: false,
            callbackKey: 'gaswrapper'
        }
    }
});
