"use strict";
exports.__esModule = true;
var Exercise_1 = require("../model/Exercise");
var TeacherUtil_1 = require("../model/TeacherUtil");
var StudentUtil_1 = require("../model/StudentUtil");
var NewCabinet = /** @class */ (function () {
    function NewCabinet(document) {
        var studentFullName = this.getStudentFullName(document);
        var splitStudentFullName = studentFullName.split(" ");
        this.button = this.getButtonElement(document);
        this.studentInitials = StudentUtil_1["default"].makeStudentForNewCabinet(splitStudentFullName);
        this.teacherInitials = TeacherUtil_1["default"].makeTeacher();
        this.exercise = new Exercise_1["default"](this.getExerciseTitle(document));
    }
    /**
     * @Override
     *
     */
    NewCabinet.prototype.init = function () {
        console.log(this.exercise, this.studentInitials, this.teacherInitials);
    };
    NewCabinet.prototype.getStudentFullName = function (document) {
        return document.querySelector("span.components-trainer-TaskPage-components-Header-components-User--userName--1K9q-").innerHTML;
    };
    NewCabinet.prototype.getButtonElement = function (document) {
        var element = document.querySelector(".components-trainer-TaskPage-components-Header--buttonReview--2y1-7");
        return element;
    };
    NewCabinet.prototype.getExerciseTitle = function (document) {
        return document.querySelector("a.components-trainer-TaskPage-components-Title--titleLink---0uEG").innerHTML;
    };
    NewCabinet.prototype.addEventsToButton = function (events, handler) {
        this.button.addEventListener(events, handler);
    };
    return NewCabinet;
}());
exports["default"] = NewCabinet;
