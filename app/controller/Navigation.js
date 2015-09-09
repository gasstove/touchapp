Ext.define('touchapp.controller.Navigation',{
    extend: 'Ext.app.Controller',
    requires: [
        'touchapp.view.Navigation'
    ],
    config: {
        refs: {
            navView : 'navview'
        },
        control: {
            navView: {
                back: 'onBack'
            }
        }
    },

    onBack : function(){
        touchapp.this_event = null;
    }

});
