Ext.define('touchapp.store.SharedMedias', {
    extend: 'Ext.data.Store',
    requires: [
        'touchapp.model.Media',
        'Ext.data.proxy.JsonP'
    ],

    config: {
        model: 'touchapp.model.Media',
        storeId: 'sharedMediasStore',
        autoLoad: false,
        proxy:{
            type: 'jsonp',
            baseurl: apiUrl+'/gs-rest-api/mediaevents/',
            appendId: false,
            callbackKey: 'gaswrapper'
        },
        grouper : function(record) {
            return record.get('userId');
        }
    }
});
