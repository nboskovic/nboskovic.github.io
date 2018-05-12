$(function() {
    var feed = new Instafeed({
        clientId: '84561aa398304c9f95541003fe6d4abb',
        target: 'instafeed',
        // useHttp: true,
        userId: 184745639,
        accessToken: '184745639.84561aa.4104e9f3bba248e18c68a1685ed6cc45',
        get: 'user',
        links: true,
        limit: 12,
        sortBy: 'most-recent',
        resolution: 'standard_resolution',
        template: '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="photo-box"><div class="image-wrap"><a href="{{link}}"><img src="{{image}}" class="img-responsive"></a><div class="likes">{{likes}} Likes</div></div><div class="description">{{caption}}<div class="date">{{model.date}}</div></div></div></div>'
    });
    feed.run();
 
});