Ext.define('touchapp.controller.EventConfig',{
    extend: 'Ext.app.Controller',
    requires: [
        'touchapp.view.user.NewEventConfig',
        'touchapp.view.event.EventConfig'
    ],
    config: {
        refs: {
            newEventConfig: 'eventconfignew',
            eventConfig: 'eventconfig',
            btnSubmit: 'eventconfig #btnSubmit',
            newbtnSubmit: 'eventconfignew #btnSubmit'
        },
        control: {
            newEventConfig: {
                show: function() {
                    this.paintPanel(this.getNewEventConfig(),false);
                }
            },
            eventConfig: {
                show: function() {
                    var readonly = !touchapp.this_event.get('amOwner');
                    this.paintPanel(this.getEventConfig(),readonly);
                }
            },
            btnSubmit: {
                tap: function(){
                    this.submitForm(this.getEventConfig());
                }
            },
            newbtnSubmit: {
                tap: function(){
                    this.submitForm(this.getNewEventConfig());
                }
            }
        }
    },

    paintPanel: function(panel,readonly){
        panel.down('#nameText').set('readOnly',readonly);
        panel.down('#startPicker').setDisabled(readonly);
        panel.down('#endPicker').setDisabled(readonly);
        panel.down('#chkGuestList').setDisabled(readonly);
        panel.down('#chkRequestAccept').setDisabled(readonly);
        panel.down('#chkOpenToPublic').setDisabled(readonly);
        panel.down('#btnSubmit').setHidden(readonly);
    },

    submitForm: function(form){

        var isNewEvent = form.getRecord()==null;

        var formValues = form.getValues();
        formValues.id = isNewEvent ? null : form.getRecord().get('id');
        formValues.ownerId = touchapp.login_user.get('id');

        var jsonData = Ext.JSON.encode(formValues);

        Ext.Ajax.request({
            url : apiUrl+'/gs-rest-api/events',
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            params : jsonData,
            success:function(data){

                var responseText = Ext.JSON.decode(data.responseText)
                var event = Ext.create(touchapp.model.Event,Ext.JSON.decode(responseText.resource));
                event.setAmOwner();

                form.setRecord(event)

                if(!isNewEvent) {   // modifying an existing event
                    touchapp.this_event = event
                }
                else{       // creating a new event
                    Ext.getStore('eventsListStore').add(event);
                }

            },
            failure:function(form, result){
                console.log('FAILURE PICUI RECEIVING')
                console.log(result)
            }
        });
    }

});
