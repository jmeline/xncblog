"use strict";

var React = require('react');
var Router = require('react-router');
var Toastr = require('toastr');

var ManageCoursePage = React.createClass({
    mixins: [
        Router.Navigation
    ],

    render: function(){
        return (
            <div className="container-fluid">
                <h1>Manage Course Page </h1>
            </div>
        );
    }
});

module.exports = ManageCoursePage;

