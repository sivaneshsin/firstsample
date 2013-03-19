Ext.define('Quizservice.store.users', {
    extend: 'Ext.data.Store',
     
    config: {
     model: 'Quizservice.model.user',
     autoLoad: true,
      
     proxy: {
      //use sessionstorage if need to save data for that
      //specific session only
      type: 'localstorage',
         id  : 'userKey'
     }
    }
});