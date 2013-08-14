$.mvc.controller.create("home", {
    views: {
        "homeTpl": "views/home.tpl"}, //These are the views we will use with the controller

    init: function() {
        console.log('init home controller');
    },
    default: function() {
        $.ui.updatePanel("#home", $.template('homeTpl'));
            console.log('home loaded');
        }
});