"use strict";

var React = require('react');
var Router = require('react-router');
var Toastr = require('toastr');
var AuthorForm = require('./authorForm');
var AuthorActions = require('../../actions/authorActions');
var AuthorStore = require('../../stores/authorStores');

var ManageAuthorPage = React.createClass({
    mixins: [
        Router.Navigation
    ],

    statics: {
        willTransitionFrom: function(transition, component){
            if(component.state.dirty && !confirm('Leave without saving?')) {
                transition.abort();
            }
        }
    },

    getInitialState: function() {
        return {
            author: {id: '', firstName: '', lastName: ''},
            errors: {},
            dirty: false
        };
    },

    componentWillMount: function(){
        var authorId = this.props.params.id; // from the path '/author:id'

        if (authorId) {
            this.setState({author: AuthorStore.getAuthorById(authorId)});
        }

    },

    setAuthorState: function(event){
        this.setState({dirty: true});
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        return this.setState({ author: this.state.author });
    },

    saveAuthor: function(event){
        event.preventDefault();
        var firstName = this.state.author.firstName;
        var lastName = this.state.author.lastName;
        if (!this.isAuthorValid()){
            return;
        }

        var msg = "Author: {" + firstName + " " + lastName + "}";
        if (this.state.author.id){
            AuthorActions.updateAuthor(this.state.author);
            Toastr.success(msg + " updated!");
        } else {
            AuthorActions.createAuthor(this.state.author);
            Toastr.success(msg + " added!");
        }
        this.setState({dirty: false});
        this.transitionTo('authors');
    },

    isAuthorValid: function(){
        var formIsValid = true;
        this.state.errors = {};

        if (this.state.author.firstName.length < 3){
            this.state.errors.firstName = 'First name must be at least 3 characters';
            formIsValid = false;
        }
        if (this.state.author.lastName.length < 3){
            this.state.errors.lastName = 'Last name must be at least 3 characters';
            formIsValid = false;
        }
        this.setState({errors: this.state.errors});
        return formIsValid;

    },

    render: function() {
        return (
            <AuthorForm
                author={ this.state.author }
                onChange={this.setAuthorState}
                onSave={ this.saveAuthor }
                errors={this.state.errors}/>
        );
    }
});

module.exports = ManageAuthorPage;
