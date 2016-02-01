
"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var CourseApi = require('../api/authorApi/coursesApi');


var ActionTypes = require('../constants/actionTypes');

var CourseActions = {
    createCourse: function(course){
        var newCourse = CourseApi.saveAuthor(course);

        // Hey dispatcher, go tell all the stores that an author was just created.
        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_AUTHOR,
            author: newCourse
        });
    },
    updateAuthor: function(author){
        var updatedAuthor = CourseApi.saveAuthor(author);

        Dispatcher.dispatch({
            actionType: ActionTypes.UPDATE_AUTHOR,
            author: updatedAuthor
        });
    },
    deleteAuthor: function(id){
        CourseApi.deleteAuthor(id);

        Dispatcher.dispatch({
            actionType: ActionTypes.DELETE_AUTHOR,
            id: id
        });
    }
};

module.exports = CourseActions;
