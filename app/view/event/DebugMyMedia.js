Ext.define('touchapp.view.event.DebugMyMedia', {
    extend: 'Ext.List',
    xtype: 'myMediaViewDebug',
    config: {
        title: '*My media*',
        layout: 'fit',
        store: 'myMediasStore',
        iconCls: 'user',
        itemTpl: '{mediaId}, {mediaFileName}, {url}'
    },

    initialize: function(){
        var store = Ext.getStore('myMediasStore');
        store.getProxy().setUrl(store.getProxy().config.baseurl + "event/" + touchapp.this_event.get('id') + "/user/" + touchapp.login_user.get('id') + '/');
        store.load();
        this.callParent();
    }

});
