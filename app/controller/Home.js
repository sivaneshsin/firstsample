Ext.define('Quizservice.controller.Home', {
    extend: 'Ext.app.Controller',
    view: ['Home'],
    config: {
        refs: {
            homeTitle: '#homeTitle',
            labelTitle:'#labelTitle',
        }
    },

    setCaption: function() {

        this.getHomeTitle().setTitle("welcome:&nbsp;&nbsp;"+sessionStorage.UserName);
        this.getLabelTitle().setTitle("Quiz Number:"+sessionStorage.QuizNumber);

       
}
   
});