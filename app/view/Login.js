Ext.define('Quizservice.view.Login',{

 extend:'Ext.form.Panel',

 requires:[

 'Ext.TitleBar',
 'Ext.data.proxy.SessionStorage',

 ],
xtype:'login',
 config:{

 	scrollable:true,
 	fullscreen:true,
    url:'/Quizonsession/users.php',
    styleHtmlContent:true,
 	
 	items:[{
 		xtype:'titlebar',
 		docked:'top',
 		title:'Welcome to Quiz On Session',
 	},
 {
 	    
 		xtype:'fieldset',
 		items:[{
 			xtype:'textfield',
 			label:'Name',
 			id:'username',
 			name:'username',
 			required: true,             
 		},{
 			xtype:'textfield',
 			label:'Quiznumber',
 			id:'quiznumber',
 			name:'quiznumber',
 			required: true,
 		}]

 	},
 	{   xtype:'button',
 		ui:'action',
 		text:'Login',
 		id:'loginbtn',
 		handler:function(){ 
 			this.up('login').submit(); 
 		var dataStore = window.sessionStorage;
 		dataStore.setItem('UserName',Ext.getCmp('username').getValue());
 		dataStore.setItem('QuizNumber',Ext.getCmp('quiznumber').getValue());
        window['Quizservice'].app.dispatch({
        controller:'Home',
        action:'setCaption',
         });
       this.up('login').reset(); 
        Ext.Viewport.getLayout().setAnimation({type: 'slide', direction: 'left',duration: 500,easing: 'ease-in-out'});
        Ext.Viewport.setActiveItem(1);
 		}

 	}]
    
  }

});