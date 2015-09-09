Ext.define('touchapp.view.event.EventUsersList', {
    extend: 'Ext.List',
    xtype: 'eventusers',

    config: {
        store: 'eventusersStore',
        itemTpl: '{id} {first} {last}',
        selectedCls: ''
    },

    // populate with the list of events for this user
    initialize: function(){
        var store = Ext.getStore('eventusersStore');
        store.getProxy().setUrl(store.getProxy().config.baseurl + touchapp.this_event.get('id') + '/');
        store.load();
        this.callParent();
    }

});
