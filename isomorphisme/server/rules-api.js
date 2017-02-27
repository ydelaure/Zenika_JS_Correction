/**
 * Rules API.
 * GET /rest/rules
 * GET /rest/rules/:id
 * POST /rest/rules
 * PUT /rest/rules/:id
 * POST /rest/rules/:id/likes
 * POST /rest/rules/:id/dislikes
 */

var _ = require('lodash');
var rules = require('./rules');

module.exports = function (app) {
  var id = _.last(rules).id;

  var checkRule = function(rule) {
    var title = rule.title;
    var desc = rule.description;

    return !!title && title.length <= 50 &&
      (!desc || (desc.length >= 5 && desc.length <= 100));
  };

  app.get('/rest/rules', function(req, res) {
    console.log('GET /rest/rules');
    return res.status(200).json(rules);
  });

  app.get('/rest/rules/:id', function(req, res) {
    console.log('GET /rest/rules/' + req.params.id);

    var id = Number(req.params.id);
    var rule = _.find(rules, function (r) {
      return r.id === id;
    });

    if (!rule) {
      return res.status(404).send();
    } else {
      return res.status(200).json(rule);
    }
  });

  app.post('/rest/rules', function(req, res) {
    console.log('POST /rest/rules');
    console.log('  => body: ', req.body);

    var body = req.body;

    if (!body || _.has(body, 'id') || !checkRule(body)) {
      return res.status(400).send();
    }

    body.id = ++id;
    body = _.defaults(body, {
      likes: 0,
      dislikes: 0,
      tags: []
    });

    rules.push(body);

    return res.status(201).json(body);
  });

  app.put('/rest/rules/:id', function(req, res) {
    console.log('PUT /rest/rules/' + req.params.id);
    console.log('  => body: ', req.body);

    var body = req.body;

    if (!body || !checkRule(body)) {
      return res.status(400).send();
    }

    var id = Number(req.params.id);
    var rule = _.find(rules, function (r) {
      return r.id === id;
    });

    if (rule) {
      _.extend(rule, body);
    } else {
      rule = body;
      rule.id = id;
    }

    return res.status(200).json(rule);
  });

  app.post('/rest/rules/:id/likes', function(req, res) {
    console.log('POST /rest/rules/' + req.params.id + '/likes');

    var id = Number(req.params.id);
    var rule = _.find(rules, function (r) {
      return r.id === id;
    });

    if (!rule) {
      res.status(404).send();
    }

    rule.likes++;
    res.status(200).json(rule);
  });

  app.post('/rest/rules/:id/dislikes', function(req, res) {
    console.log('POST /rest/rules/' + req.params.id + '/dislikes');

    var id = Number(req.params.id);
    var rule = _.find(rules, function (r) {
      return r.id === id;
    });

    if (!rule) {
      res.status(404).send();
    }

    rule.dislikes++;
    res.status(200).json(rule);
  });
};