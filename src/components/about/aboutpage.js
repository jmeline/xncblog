"use strict";

var React = require('react');

var About = React.createClass({
    render: function(){
        return (
            <div>
                <h1>About</h1>
                <p>
                    <h2>This application uses the following technologies:</h2>
                    <ul>
                        <li>React</li>
                        <li>React Router</li>
                        <li>Flux</li>
                        <li>Node</li>
                        <li>Gulp</li>
                        <li>Browserify</li>
                        <li>Brootstrap</li>
                    </ul>
                </p>
            </div>
        );
    }
});

module.exports = About;
