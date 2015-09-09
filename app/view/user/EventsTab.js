Ext.define('touchapp.view.user.EventsTab', {
    extend: 'Ext.TabPanel',
    xtype: 'eventstab',
    requires: [
        'touchapp.view.user.NewEventConfig',
        'touchapp.view.user.EventsList',
        'touchapp.view.user.UserProfile'
    ],

    config: {
        fullscreen: true,
        tabBarPosition: 'bottom',
        title: '',

        items: [
            {
                xtype: 'eventslist' ,
                title: 'My Events',
                iconCls: 'home'
            }
            ,{
                xtype: 'eventconfignew',
                title: 'New',
                iconCls: 'add'
            },
            {
                xtype: 'userprofile',
                title: 'Profile',
                iconCls: 'user'
            }
        ]

    }

});
