$.mvc.controller.create("news", {
    views: {
        "newsTpl": "views/news.tpl",
        "newsDetailsTpl": "views/newsDetails.tpl"}, 

    init: function() {
        // --- Register route for the details news
        $.mvc.addRoute("/newsDetails/details/", this.details);

        // --- refresh the data from the server
        this.refresh();

        // --- add pull to refresh
        
    },
    default: function() {

        // --- Get the news from the storage
        newsModel.fetchAll(function(results) {

            var newsPage = $.template("newsTpl", results);
            $.ui.updatePanel('#news', newsPage);
        });
        $.ui.scrollingDivs['news'].addPullToRefresh('<h1 style="position: absolute; ">Refreshing ...</h1>');
    },
    // --- Method called when the news is clicked
    details: function(id) {
        // --- Fetch the correct news from the storage
        newsModel.fetch(id, function(aNews) {
            $.ui.updatePanel('#newsDetails', $.template("newsDetailsTpl", aNews));
        });
    },
    // --- Refresh the news from the server
    refresh: function() {
        // --- Load the json
        var callbackSucc = function(data) {

            for (var i = 0; i < data.nodes.length; i++) {
                console.log(data.nodes[i].node);

                // -- Store each news for later use 
                newsModel = new News();
                newsModel.set({
                    title: data.nodes[i].node.title,
                    pubDate: data.nodes[i].node.pubDate,
                    intro: data.nodes[i].node.intro,
                    body: data.nodes[i].node.body
                });
                newsModel.save();
            }
        };
        // --- Use local json instead of remote
        // --- Simulate a 2 sec delay
        $.ui.showMask()
            setTimeout(function() {
                $.getJSON('./data/news.json', null, callbackSucc);
                $.ui.hideMask();
        }, 1000);
    }
});