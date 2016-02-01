"use strict";

var React = require('react');
var Link = require('react-router').Link;

var NotFoundPage = React.createClass({
    render: function(){
        return (
            <div className="jumbotron">
                <h1>Page Not Found</h1>
                <p> Whoops! Sorry, there is nothing to see here.</p>
                <Link to="app" className="btn btn-primary btn-lg.round"> Back to Home </Link>
                </div>
        );
    }
});

module.exports = NotFoundPage;
