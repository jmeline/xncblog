"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
    render: function(){
        return (
            <div>
                <h1>Blog</h1>
                <p>
                    <h4>React, React Router, and Flux for ultra-responsive we apps. </h4>
                </p>
                <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
            </div>
        );
    }
});

module.exports = Home;
