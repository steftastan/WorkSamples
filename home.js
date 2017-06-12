var mongoose = require('mongoose'),
    async = require('async'),
    moment = require('moment'),
    constants = require('./../constants/constants');

var Tag = mongoose.model('Tag');

exports.init = function (app) {

    app.get(constants.HOME.HUB, function(req, res, next) {
        async.parallel([
            function (cb) {
                Page.getLatestPages(8, 1, function (err, results) {
                    res.locals({
                        stream: results || [],
                        limit: 8
                    });
                    cb(err);
                });
            },

            // Retrieve basic Hub data
            function (cb) {
                Hub.findByPath({path: constants.HOME.HUB}, function (err, results) {
                    if (err || !results) return cb(err);
                    res.locals({ hubItem: results || {} });
                    cb(err);
                });
            },

            /*
             * Find the content collections associated to the Home hub, and use it
             * to populate the content property inside the Hub object.
             */
            function (cb) {
                Hub.findAndPopulate({field: 'path', val: constants.HOME.HUB}, function (err, result) {
                    if (err) return cb(err);
                    res.locals({ hubContent: result || [] });
                    cb(err);
                });
            },

            function (cb) {
                res.locals({ playlists: [] });
                Tag.findByPath('franchise:playlists', function (err, tag) {
                    if (err || !tag) return cb(err);
                    Page.find()
                        .where('tags').in(tag)
                        .where('active', 'true')
                        .where('contentType', 'listicle')
                        .populate('image')
                        .sort('-published')
                        .limit(5)
                        .exec(function (err, results) {
                            if (err || !results) return cb(err);
                            res.locals({ playlists: results || [] });
                            cb(err);
                        });
                });
            },

            function (cb) {
                res.locals({ songDay: [] });
                Tag.findByPath('franchise:song-of-the-day', function (err, tag) {
                    if (err || !tag) return cb(err);
                    Page.find()
                        .where('tags').in(tag)
                        .where('active', 'true')
                        .where('contentType').in(['video', 'article'])
                        .populate('image')
                        .sort('-published')
                        .limit(1)
                        .exec(function (err, results) {
                            if (err || !results) return cb(err);
                            res.locals({ songDay: results || [] });
                            cb(err);
                        });
                });
            },

            function (cb) {
                Page.find()
                    .where('active', 'true')
                    .where('contentType').in(['quiz'])
                    .sort('-published')
                    .limit(1)
                    .exec(function (err, results) {
                        if (err || !results) return cb(err);
                        res.locals({ quiz: results || [] });
                        cb(err);
                    });
            },
            function (cb) {
                var query = Trending10.find({});
                query.sort('-published');
                query.where('active', true);
                query.limit(1);
                query.exec(function (err, results) {
                    res.locals({ trending10: results || [] });
                    cb(err);
                });
            },
            function (cb) {
                async.waterfall([
                    function (cb) {
                        var query = Tag.findOne();
                        query.where('path', 'photo-of-the-day');
                        query.exec(function (err, result) {
                            cb(err, result);
                        });
                    },
                    function (tag, cb) {
                        if (!tag) return cb();
                        var query = Page.findOne();
                        query.sort('-published');
                        query.where('active', 'true');
                        query.where('tags', tag);
                        query.where('contentType', 'listicle');
                        query.populate('image');
                        query.exec(function (err, result) {
                            if (err || !result) return cb(err);
                            if (result.content.length < 3) return cb(err);
                            if (result.content[0].resourceType != 'listitem' ||
                                result.content[1].resourceType != 'image' ||
                                result.content[2].resourceType != 'text') return cb(err);
                            var item = {
                                path: result.path,
                                listItem: result.content[0],
                                image: result.image,
                                text: result.content[2]
                            };
                            res.locals({ photoDay: item || {} });
                            cb(err);
                        });
                    }
                ], cb);
            }
        ],
        function (err, results) {

            // The following condition will log the url when there are errors
            if (err) {
                _l(req._parsedUrl.path);
            }

            var pageContext = {
                title: 'Music News, Interviews, Live Concerts, Photos, Music Videos',
                type: 'website',
                description: 'Fuse brings you closer to your favorite music artists and bands through exclusive interviews, live concerts, music news, photos and music videos.',
                keywords: 'music news, artist interviews, band interviews, new music, album reviews, live concerts, photos, music videos, concert photos, interviews, best music videos, top albums, best new music, festival news, band lyrics, artist lyrics, music artists, fuse, fuse tv'
            };

            res.render('home', {
                pageType: 'home',
                pageContext: pageContext,
                url: 'http://www.fuse.tv'
            });
        });

    });

    app.get(constants.HOME.STREAM, function (req, res, next) {
        var query = Page.find({});
        query.where('active', 'true');
        query.where('hide.homepage').ne(true);
        query.where('contentType').in(['article', 'video', 'gallery', 'listicle']);
        query.populate('contributors');
        query.populate('image');
        Page.paginate({
            query: query,
            page: (req.query.page || 1),
            limit: 12,
            populate: ['contributors'],
            sort: { 'published': -1 }
        }, function (err, results, total, pages, current) {
            if (err) return next();
            res.render('stream', {
                stream: results,
                total: total,
                current: current,
                limit: 9
            });
        });
    });

};
