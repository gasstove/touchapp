Ext.define('touchapp.store.EventsList', {
    extend: 'Ext.data.Store',
    requires: [
        'touchapp.model.Event',
        'Ext.data.proxy.JsonP'
    ],

    config: {
        model: 'touchapp.model.Event',
        storeId: 'eventsListStore',
        autoLoad: false,
        proxy: {
            type: 'jsonp',
            baseurl: 'http://52.10.166.27:8080/gs-rest-api/userevents/user/',
            // baseurl: touchapp.apiUrl + '/gs-rest-api/userevents/user/',
            appendId: false,
            callbackKey: 'gaswrapper'
        },
        grouper : function(record) {
            return record.get('amOwner');
        }
    }

});
