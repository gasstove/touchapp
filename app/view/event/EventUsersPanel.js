Ext.define('touchapp.view.event.EventUsersPanel', {
    extend: 'Ext.Container',
    xtype: 'eventusersPanel',
    requires: [
        'touchapp.view.event.EventUsersList',
        'touchapp.view.event.EditGuestList'
    ],

    config: {
        title: 'People',
        iconCls: 'team',
        layout: 'fit',
        items: [
            {
                xtype: 'eventusers'
            }
        ]
    },

    initialize: function(){

        me = this;

        // add the edit guest list button if I am the owner
        if(touchapp.this_event.get('amOwner')){
            me.add({
                xtype: 'button',
                text: 'Edit guests',
                docked: 'top',
                handler: function(){
                    var panel = Ext.ComponentQuery.query('editguestlist')[0];
                    Ext.Viewport.animateActiveItem(panel,{ type: 'slide', direction: 'left' });
                }
            })
        }
        this.callParent();
    }


});
