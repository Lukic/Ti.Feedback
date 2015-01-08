function Feedback(){};

Feedback.prototype.CreateDialog = function(_args){
    if(_args === undefined) _args = {};
    
    var _win = Ti.UI.createWindow({
        opacity: 1
    });
    
    var FeedbackWindow = Ti.UI.createView({
        width:(Ti.Platform.displayCaps.platformWidth - 40),
        right:Ti.Platform.displayCaps.platformWidth,
        height:Ti.UI.SIZE,
        backgroundColor:"#fff",
        layout:"vertical",
        borderRadius:3,
        borderColor:"#fff",
        borderWidth:1,
        viewShadowColor:"#999",
        viewShadowRadius:2,
        opacity:0
        });
    
    _win.add(FeedbackWindow);
    
    var FeedbackTopBar = Ti.UI.createView({
        height:80,
        top:0,
        backgroundColor:"#53B3BC"
    });
    
    var FeedbackTopImageHolder = Ti.UI.createView({
        width:70,
        height:70,
        borderRadius:35,
        backgroundColor:"#fff"
    });
    
    var FeedbackTopImage = Ti.UI.createImageView({
        width:60,
        height:60,
        image:"/lib/Feedback/icon_happy.png"
    });
    
    FeedbackTopImageHolder.add(FeedbackTopImage);
    FeedbackTopBar.add(FeedbackTopImageHolder);
    
    var FeedbackTitle = Ti.UI.createLabel({
        top:15,
        left:10,
        right:10,
        text:"Do you like Sunshine?",
        color:"#333",
        font:{fontSize:18,fontWeight:"bold"},
        textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER
    });
    
    var FeedbackMessage = Ti.UI.createLabel({
        top:10,
        left:10,
        right:10,
        text:"We would love if you had the time\n to give us some feedback.\nThanks you in advance.",
        color:"#333",
        font:{fontSize:16},
        textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER
    });
    
    
    var FeedbackButtonHolder = Ti.UI.createView({
        top:20,
        bottom:10,
        height:Ti.UI.SIZE,
        layout:"vertical"
    });
    
    var btn_1 = Ti.UI.createButton({
        title:"Let everyone know on AppStore",
        top:0,
        backgroundColor:"#ddd",
        left:10,
        right:10,
        height:45,
        color:"#333",
        font:{fontSize:18,fontWeight:"bold"},
    });
    
    var btn_2 = Ti.UI.createButton({
        title:"Let me know what I can do better",
        top:5,
        backgroundColor:"#ddd",
        left:10,
        right:10,
        height:45,
        color:"#333",
        font:{fontSize:18,fontWeight:"bold"},
    });
    
    
    var btn_3 = Ti.UI.createButton({
        title:"No thanks",
        top:5,
        backgroundColor:"#ddd",
        left:10,
        right:10,
        height:45,
        color:"#333",
        font:{fontSize:18,fontWeight:"bold"},
    });
    
    FeedbackButtonHolder.add(btn_1);
    FeedbackButtonHolder.add(btn_2);
    FeedbackButtonHolder.add(btn_3);
    
    FeedbackWindow.add(FeedbackTopBar);
    FeedbackWindow.add(FeedbackTitle);
    FeedbackWindow.add(FeedbackMessage);
    FeedbackWindow.add(FeedbackButtonHolder);
    
    setTimeout(function(){
    
    _win.open();
    FeedbackWindow.animate({
        right:20,
        left:20,
        opacity:1,
        duration:350});
    
}, 2500);


btn_3.addEventListener('click', function(e) {
    closeFeedbackWindow(e);
});
    
_win.addEventListener('click', function(e) {
    if(e.source === _win) {
        closeFeedbackWindow(e);
    }
});

function closeFeedbackWindow(e){
        FeedbackWindow.animate({
        left:Ti.Platform.displayCaps.platformWidth,
        opacity:0,
        duration:250},function(){
            _win.close();
            _win = null;
        });
    };    
};

exports.Feedback = Feedback;


