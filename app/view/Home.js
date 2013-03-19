Ext.define('Quizservice.view.Home',{

extend:'Ext.form.Panel',

id:'form',

requires:[

'Ext.form.FieldSet',
'Ext.field.Password',
'Ext.field.Radio',
'Ext.Label',

],
xtype:'home',

config:{


fullscreen:true,

scrollable:true,

url:'/Quizonsession/answer.php',

styleHtmlContent:true,

border:5,

items:[{

	xtype:'titlebar',
	title:'Quiz On Session',
	docked:'top',
},

{
 html:'<br>',
},
{
            xtype:'title',
            id:'labelTitle',
    },
    {
      html:'<br>',
    },
{   
	xtype:'fieldset',
	
	items:[
  
  {
    xtype:'textfield',
    name:'id',
    id:'id',
    hidden:true,
 },
 {
  xtype:'textfield',
  name:'name',
  id:'name',
  hidden:true,
 },
 {
 	xtype:'textfield',
 	name:'quiz_id',
 	id:'quizid',
 	hidden:true,
 },

{		
	xtype:'radiofield',
	name:'answer',
	label:'A',
	value:'option1'
},
{ 
	xtype:'radiofield',
	name:'answer',
	label:'B',
	value:'option2'
},
{
	xtype:'radiofield',
	name:'answer',
	align:'left',
	label:'C',
	value:'option3'
},
{
	xtype:'radiofield',
	name:'answer',
	align:'left',
	label:'D',
	value:'option4'	
}]
},

 {

  xtype:'button',
  name:'submit',
  text:'Submit',
  style:'margin-top:2em;',
  id:'next',
  ui:'action',
  handler:function()
  {   

  	 Ext.Ajax.request({
     url:'/Quizonsession/webservice.php',
     success:function(response,options)
     {
     	var result=response.responseXML;
     	var id=result.getElementsByTagName('row');
     	var quizid=result.getElementsByTagName('quiz_id');
      var val=id[0].childNodes[0].nodeValue;
      var val1=quizid[0].childNodes[0].nodeValue;
      Ext.getCmp('id').setValue(val);
      Ext.getCmp('quizid').setValue(val1);

     }
     });
    
    this.up('home').submit(); 
    this.up('home').reset();        
    Ext.Viewport.setActiveItem(1);
  }
 
}]
        
}

});