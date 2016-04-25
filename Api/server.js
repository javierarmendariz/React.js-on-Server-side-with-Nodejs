'use strict';

// JSX Transpiler
require('node-jsx').install();

// Express App
const express = require('express');
const App = express();

// Handlebars
const ExpressHandlebars = require('express-handlebars');
App.engine('handlebars', ExpressHandlebars({defaultLayout: 'main'}));
App.set('view engine', 'handlebars');

// React Framework
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ReactApp = React.createFactory(require('./ReactApp/App'));

// Route: tweet
App.get('/tweets', function (req, res) {
    // React Application
    let ReactAppString = ReactDOMServer.renderToString(ReactApp());
    // Main HTML Structure
    res.render('home', {
        reactapp: ReactAppString
    });
});

// Start the Server
App.listen(3000, function () {
    console.log('Server Listening...');
});