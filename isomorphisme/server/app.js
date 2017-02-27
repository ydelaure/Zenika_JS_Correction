var ReactRouter = require('react-router');
var ReactDOMserver = require('react-dom/server');
var routes = require('./routes');
var FormRule =  require('../tp0/js/form-rule-container');
var Layout = require('../layout');
var RuleList = require('../rule-list-container');

app.get('/', function (req, res) {
    ReactRouter.match({ routes, location: req.url }, function (error, redirectLocation, renderProps) {
        if (error) {
            res.status(500).send(error.message);
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {
            res.status(200).render('index', {
                markup: ReactDOMserver.renderToString(<RuleList {...renderProps} />)
            });
        } else {
            res.status(404).send('Not found');
        }
    });
})

app.get('/edit', function (req, res) {
    ReactRouter.match({ routes, location: req.url }, function (error, redirectLocation, renderProps) {
        if (error) {
            res.status(500).send(error.message);
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {
            res.status(200).render('index', {
                markup: ReactDOMserver.renderToString(<FormRule {...renderProps} />)
            });
        } else {
            res.status(404).send('Not found');
        }
    });
})
