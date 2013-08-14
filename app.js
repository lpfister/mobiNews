var webRoot = "./";

$.ui.autoLaunch = false;
$.ui.openLinksNewTab = false;

$(document).ready(function() {
    
    // create app
    var app = new $.mvc.app();
    app.listenHashChange();

    app.loadControllers(["home", "news"]);
    app.loadModels(["news"]);
    
    app.ready(function(){
        $.mvc.route("/home");//Load the default todo route
        $.ui.launch();
    });
    
    

});

/* This code is used to run as soon as appMobi activates */
var onDeviceReady = function() {
    AppMobi.device.setRotateOrientation("portrait");
    AppMobi.device.setAutoRotate(false);
    webRoot = AppMobi.webRoot + "";
    //hide splash screen
    AppMobi.device.hideSplashScreen();
    $.ui.blockPageScroll(); //block the page from scrolling at the header/footer

};
document.addEventListener("appMobi.device.ready", onDeviceReady, false);



$.ui.ready(function() {
    // --- hide footer
    $.ui.removeFooterMenu();
    
});





