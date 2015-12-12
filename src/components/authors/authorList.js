"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var Toastr = require('toastr');
var AuthorActions = require('../../actions/authorActions');
var Link = ReactRouter.Link;

var AuthorList = React.createClass({
    propTypes: {
        authors: React.PropTypes.array.isRequired
    },

    deleteAuthor: function(author, event){
        event.preventDefault();
        var firstName = author.firstName;
        var lastName = author.lastName;
        AuthorActions.deleteAuthor(author.id);
        Toastr.success("Author: {" + firstName + " " + lastName + "} removed!");
    },

    render: function(){
        var createAuthorRow = function(author){
            return (
                <tr key={author.id}>
                    <td><a href="#" onClick={this.deleteAuthor.bind(this, author)}>Delete</a></td>
                    <td><Link to="manageAuthor" params={{id: author.id}}>{author.id}</Link></td>
                    <td>{author.firstName} {author.lastName}</td>
                </tr>
            );
        };

        return (
            <div className="container-fluid">
                <table className="table">
                    <thead>
                        <th></th>
                        <th>ID</th>
                        <th>Name</th>
                    </thead>
                    <tbody>
                        {this.props.authors.map(createAuthorRow, this)}
                    </tbody>

                </table>
            </div>
        );
    }
});


module.exports = AuthorList;
