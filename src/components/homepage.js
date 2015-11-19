"use strict";

var React = require('react');

var Home = React.createClass({
    render: function(){
        return (
            <div className="container-fluid jumbotron">
                <h1>Pluralsight Administration</h1>
                <p>React, React Router, and Flux for ultra-responsive we apps. </p>
            </div>
        )
    }
});

module.exports = Home;
