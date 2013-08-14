var News = $.mvc.model.extend("news", {
    title: '',
    pubDate: '',
    intro: '',
    body: ''
});

var newsModel = new News();