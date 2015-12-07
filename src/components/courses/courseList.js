
"use strict";

var React = require('react');

var CoursesList = React.createClass({
    propTypes: {
        courses: React.PropTypes.array.isRequired
    },

    render: function(){
        var createCourseRow = function(course){
            return (
                <tr key={course.title}>
                    <td>{course.title}</td>
                    <td>{course.author}</td>
                    <td>{course.category}</td>
                    <td>{course.length}</td>
                </tr>
            );
        };

        return (
            <div className="container-fluid">
                <h1>Courses</h1>
                <table className="table">
                    <thead>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Category</th>
                        <th>Length</th>
                    </thead>
                    <tbody>
                        {this.props.courses.map(createCourseRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});


module.exports = CoursesList;
