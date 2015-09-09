Ext.define('touchapp.view.event.DebugSharedMedia', {
    extend: 'Ext.List',
    xtype: 'sharedMediaViewDebug',

    config: {
        title: '*Shared media*',
        store: 'sharedMediasStore',
        iconCls: 'download',
        grouped: true,
        groupTpl: ['user {userId}'],
        itemTpl: 'user {userId}, event {eventId}, media {mediaId}'
    },

    initialize: function(){
        var store = Ext.getStore('sharedMediasStore');
        store.getProxy().setUrl(store.getProxy().config.baseurl + "event/" + touchapp.this_event.get('id') + '/');
        store.load();
        this.callParent();
    }
});
