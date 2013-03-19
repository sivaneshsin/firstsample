Ext.define('Quizservice.view.Start', {

    extend: 'Ext.form.Panel',

      config:
    {
    
        items: [{
        xtype:'titlebar',
         docked:'top',
        items:[{
        xtype:'title',

        id:'homeTitle',
        align:'right'},
        {
            xtype:'button',
            text:'Logout',
            align:'right',
            handler:function(){
        Ext.Viewport.getLayout().setAnimation({type: 'slide', direction: 'right',duration: 500,easing: 'ease-in-out'});
        Ext.Viewport.setActiveItem(0);
        }
        }]
        },
        {
            xtype: 'button',
            text: 'Get Question ',
            ui: 'confirm',
        
            handler: function() {
        
                Ext.Ajax.request({

                    url: '/Quizonsession/webservice.php',

                    success: function(response, options) {

                        var result = response.responseXML;
                        var id = result.getElementsByTagName('row');
                        var quizid = result.getElementsByTagName('quiz_id');
                        var val = id[0].childNodes[0].nodeValue;
                        var val1 = quizid[0].childNodes[0].nodeValue;

                        if (val == Ext.getCmp('id').getValue()) {
                            Ext.Msg.alert('Warning', 'Question is not active.');
                        }
                        else {
                            Ext.getCmp('id').setValue(val);
                            Ext.getCmp('quizid').setValue(val1);
                            Ext.getCmp('name').setValue(sessionStorage.UserName);
                            Ext.Viewport.setActiveItem(2);
                        }


                    }
                });


            }

}]

        }

    });