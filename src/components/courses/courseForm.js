"use strict";

var React = require('react');
var Input = require('../common/textinput');

var CourseForm = React.createClass({
    propTypes: {
        courses: React.PropTypes.object.isRequired,
        onSave: React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired,
        errors: React.PropTypes.object
    },
    render: function() {
        return (
        <form>
            <h1>Manage Courses</h1>

            <Input
                name="firstName"
                label="First Name"
                value={ this.props.courses.firstName }
                onChange={ this.props.onChange }
                error={this.props.errors.firstName}/>
            <br />

            <Input
                name="lastName"
                label="Last Name"
                value={ this.props.courses.lastName }
                onChange={ this.props.onChange }
                error={this.props.errors.lastName}/>
            <br />

            <input type="submit" value="Save"
                className="btn btn-default"
                onClick={ this.props.onSave }/>
        </form>
        );
    }
});

module.exports = CourseForm;
