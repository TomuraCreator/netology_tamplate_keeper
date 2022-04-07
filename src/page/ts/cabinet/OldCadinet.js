"use strict";
exports.__esModule = true;
var TeacherUtil_1 = require("../model/TeacherUtil");
var Exercise_1 = require("../model/Exercise");
var StudentUtil_1 = require("../model/StudentUtil");
var OldCabinet = /** @class */ (function () {
    function OldCabinet(document) {
        var stringBreadcrumbs = this.getInnerTextBreadcrumbs(document);
        var splitStringBreadcrumbs = stringBreadcrumbs.split("|");
        this.studentInitials = StudentUtil_1["default"].makeStudentForOldCabinet(splitStringBreadcrumbs[0]);
        this.teacherInitials = TeacherUtil_1["default"].makeTeacher();
        this.exercise = new Exercise_1["default"](splitStringBreadcrumbs[1].trim());
    }
    OldCabinet.prototype.init = function () {
        console.log(this.exercise, this.studentInitials, this.teacherInitials);
    };
    OldCabinet.prototype.getInnerTextBreadcrumbs = function (document) {
        var element = document.querySelector(".breadcrumb li:last-child");
        return element.innerText;
    };
    OldCabinet.prototype.addEventsToButton = function (events, handler) {
        this.button.addEventListener(events, handler);
    };
    return OldCabinet;
}());
exports["default"] = OldCabinet;
