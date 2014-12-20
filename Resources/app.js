(function() {
 
var win = Ti.UI.createWindow({
    backgroundColor:"#333"
}); 


    var TiFeedback = require("/lib/Feedback/Ti.Feedback");
    var Feedback = new TiFeedback.Feedback();
    Feedback.CreateDialog({}); 


win.open();

})();


 