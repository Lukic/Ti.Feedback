(function() {
 
var win = Ti.UI.createWindow({
    backgroundColor:"#333"
}); 



    var TiFeedback = require("/lib/Feedback/Ti.Feedback");
    var Feedback = new TiFeedback.Feedback();
    
    Feedback.CreateDialog({
        appStartsBeforeShow:10, // Number of times your app has been uased, before showing this dialog.
        topBarImage:"/lib/Feedback/icon_happy.png", // topBar icon. Could be your app logo or a happy face :)
        title:"Do you like Sunshine?", // Title of the dialog window.
        message:"We would love if you had the time\n to give us some feedback.\nThanks you in advance.", // Friendy message.
        buttonNames:["Let everyone know on AppStore","Let me know what I can do better","No thanks"], // Array with your buttons
        cancel:2, // Array index of the cancle button.
        clickEvent:function(obj)// Callback that wil return index of the clicked button. 
        {
            
        }
    }); 

win.open();

})();


 