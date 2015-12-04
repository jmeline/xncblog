"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var AuthorStore = require('../../stores/authorStores');
// var AuthorActions = require('../../actions/authorActions');

var AuthorList = require('./authorList');

var Authors = React.createClass({
    getInitialState: function(){
        return {
            authors: AuthorStore.getAllAuthors()
        };
    },

    render: function(){

        return (
            <div>
                <h1>Authors</h1>
                <Link to="addAuthor" className="btn btn-default">Add Author</Link>
                <AuthorList authors={this.state.authors} />
            </div>
        );
    }
});


module.exports = Authors;
