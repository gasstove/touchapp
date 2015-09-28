Ext.define('touchapp.view.Login', {
    extend: 'Ext.form.Panel',
    xtype: 'loginview',
    requires: [ 'Ext.form.FieldSet',
                'Ext.form.Password',
                // 'Ext.Img',
                'Ext.Label'],
    config: {
        title: 'Login',
        items: [
          //  {
          //      xtype: 'image',
          //      src: Ext.Viewport.getOrientation() == 'portrait' ? '../../../img/login.png' : '../../../img/login-small.png',
          //      style: Ext.Viewport.getOrientation() == 'portrait' ? 'width:80px;height:80px;margin:auto' : 'width:40px;height:40px;margin:auto'
          //  },
            {
                xtype: 'label',
                html: 'Login failed. Please enter the correct credentials.',
                itemId: 'signInFailedLabel',
                hidden: true,
                hideAnimation: 'fadeOut',
                showAnimation: 'fadeIn',
                style: 'color:#990000;margin:5px 0px;'
            },
            {
                xtype: 'fieldset',
                title: 'Login view title',
                items: [
                    {
                        xtype: 'textfield',
                        placeHolder: 'Username',
                        itemId: 'userNameTextField',
                        name: 'userNameTextField',
                        required: true
                    },
                    {
                        xtype: 'passwordfield',
                        placeHolder: 'Password',
                        itemId: 'passwordTextField',
                        name: 'passwordTextField',
                        required: true
                    }
                ]
            },
            {
                xtype: 'button',
                itemId: 'logInButton',
                ui: 'action',
                padding: '10px',
                text: 'Log In'
            }
        ]

    }

});
