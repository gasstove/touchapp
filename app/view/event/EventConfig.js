Ext.define('touchapp.view.event.EventConfig', {
    extend: 'touchapp.view.EventConfigBase',
    xtype: 'eventconfig',


    initialize: function() {

        console.log('eventconfig int')


        this.setRecord(touchapp.this_event);
//
//
//        var amOwner;
//
//        if(touchapp.this_event ==null){
//            amOwner = true;
//        } else{
//            amOwner = touchapp.this_event.get('amOwner');
//        }
//
//        Ext.ComponentQuery.query('eventconfig #nameText')[0].set('readOnly',!amOwner);
//        Ext.ComponentQuery.query('eventconfig #startPicker')[0].set('readOnly',!amOwner);
//        Ext.ComponentQuery.query('eventconfig #endPicker')[0].set('readOnly',!amOwner);
//
//        Ext.ComponentQuery.query('eventconfig #chkGuestList')[0].setDisabled(!amOwner);
//        Ext.ComponentQuery.query('eventconfig #chkRequestAccept')[0].setDisabled(!amOwner);
//        Ext.ComponentQuery.query('eventconfig #chkOpenToPublic')[0].setDisabled(!amOwner);
//
//        Ext.ComponentQuery.query('eventconfig #btnSubmit')[0].setHidden(!amOwner);
//        Ext.ComponentQuery.query('eventconfig #btnEditGuestList')[0].setHidden(true);


        this.callParent();

    }



});
