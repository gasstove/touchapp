Ext.define('touchapp.view.event.EventTab', {
extend: 'Ext.TabPanel',
    xtype: 'eventtab',
    requires: [
    'touchapp.view.event.EventConfig',
    'touchapp.view.event.EventUsersList',
    'touchapp.view.event.EventUsersPanel',
    'touchapp.view.event.MyMedia',
    'touchapp.view.event.DebugMyMedia',
    'touchapp.view.event.SharedMedia',
    'touchapp.view.event.DebugSharedMedia'
],

    config: {
    fullscreen: true,
        tabBarPosition: 'bottom',
        title: '',
        items: [
        {
            xtype: 'eventconfig' ,
            title: 'Settings',
            iconCls: 'settings'
        },
        { xtype: 'eventusersPanel'  },
//            { xtype: 'myMediaViewDebug'  },
        { xtype: 'myMediaView'  },
//            { xtype: 'sharedMediaViewDebug' },
        { xtype: 'sharedMediaView' }
    ]
},

initialize: function(){
    this.setTitle(touchapp.this_event.data.name);
    this.callParent();
}

});

