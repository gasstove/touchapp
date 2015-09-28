Ext.define('touchapp.model.Event', {
    extend: 'Ext.data.Model',
    requires: [
        'touchapp.model.User',
        'touchapp.model.Media'
    ],

    config: {
        idProperty: 'HighliteIdProperty', // needed to prevent conflict btw touch
                                          // and jsonp, as per
                                          // http://stackoverflow.com/questions/11048776/sencha-touch-2-list-shows-only-last-item-retrieved-from-api

        fields: [
            'id',
            'name',
            {
                name: 'openDate',
                type: 'Date'
            },{
                name: 'closeDate',
                type: 'Date'
            },{
                name: 'joinInvitation',
                type: 'Boolean'
            },{
                name: 'joinAllowByAccept',
                type: 'Boolean'
            },{
                name: 'ownerId',
                type: 'Integer'
            },{
                name: 'amOwner',                // iff the logged in user owns this event
                type: 'Boolean'
            },
            'users',
            'medias'
        ],

        associations: [
            {
                type: 'hasMany',
                model: 'touchapp.model.User',
//                primaryKey: 'id',
//                foreignKey: 'userid',
                name: 'users'
            },
            {
                type: 'hasMany',
                model: 'touchapp.model.Media',
//                primaryKey: 'id',
//                foreignKey: 'mediaid',
                name: 'medias'
            }
        ]

    },

    setAmOwner: function(){
        this.set( 'amOwner' , touchapp.login_user.getId()==this.get('ownerId') );
    }

});
