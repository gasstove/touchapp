Ext.define('touchapp.model.Media', {
    extend: 'Ext.data.Model',

    config: {
        idProperty: 'HighliteIdProperty', // needed to prevent conflict btw touch
                                          // and jsonp, as per
                                          // http://stackoverflow.com/questions/11048776/sencha-touch-2-list-shows-only-last-item-retrieved-from-api

        fields: [
            'mediaId',
            'eventId',
            'userId',           // owner
            'numDownloads',
            'shared',
            'numLikes',
            'numDislikes',
            'mediaType',
            'mediaFileName',
            'mediaDateTaken'
            {
                name: 'url',
                type: 'string',
                defaultValue: 'resources/images/1.jpg'
            },{
                name: 'selected',
                type: 'boolean',
                defaultValue: false
            }
        ]
    }

});
