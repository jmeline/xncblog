"use strict";

var React = require('react');
var AuthorApi = require('../../api/authorApi');

var Authors = React.createClass({
    render: function(){
        return (
            <div className="container-fluid">
                <h1>Authors</h1>
            </div>
        );
    }
});


module.exports = Authors;
