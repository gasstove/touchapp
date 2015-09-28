Ext.define('touchapp.model.User', {
    extend: 'Ext.data.Model',

    config: {
        idProperty: 'HighliteIdProperty', // needed to prevent conflict btw touch
                                          // and jsonp, as per
                                          // http://stackoverflow.com/questions/11048776/sencha-touch-2-list-shows-only-last-item-retrieved-from-api
            
        fields: [
            'id',
            'first',
            'last'
        ]
    }

});
