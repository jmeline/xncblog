"use strict";

var React = require('react');
var CourseApi = require('../../api/coursesApi');
var CourseList = require('./courseList');

var Courses = React.createClass({
    getInitialState: function(){
        return {
            courses: []
        };
    },
    componentDidMount: function(){
        if(this.isMounted()){
            this.setState({ courses: CourseApi.getAllCourses()});
        }
    },
    render: function(){
        return (
            <div>
                <h1>Courses</h1>
                <CourseList courses={this.state.courses} />
            </div>
        );
    }
});


module.exports = Courses;
