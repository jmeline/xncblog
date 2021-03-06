"use strict";
var React = require('react');
var Router = require('react-router');
var routes = require('./routes');
var InitializeActions = require('./actions/initializeActions');

InitializeActions.initApp();

// History Routing
// Router.run(routes, Router.HistoryLocation, function(Handler){
//     React.render(<Handler/>, document.getElementById('app'));
// });

// Hash Routing
Router.run(routes, function(Handler){
    React.render(<Handler/>, document.getElementById('app'));
});

