(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global['v-chronos'] = {})));
}(this, (function (exports) { 'use strict';

var moment = require('moment');
function convertStringToNumber(date) {
    return new Date(date).getTime();
}
function willDatesCollide(eventOne, eventTwo) {
    return (convertStringToNumber(eventTwo.start) <= convertStringToNumber(eventOne.end)) &&
        (convertStringToNumber(eventOne.start) <= convertStringToNumber(eventTwo.end));
}
function isInDateRange(startDate, endDate, date) {
    var dt = convertStringToNumber(date);
    return dt >= convertStringToNumber(startDate) && dt <= convertStringToNumber(endDate);
}
function getInitialMomentDate(momentObject) {
    return moment(momentObject).clone().month(0).year(1971).date(1);
}
function addOneDay(date) {
    return moment(date).add(1, 'day').toISOString();
}
function addDayToDateEvent(dateEvent) {
    return {
        start: addOneDay(dateEvent.start),
        end: addOneDay(dateEvent.end)
    };
}

var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var moment$2 = require('moment');
var TIME_WITH_TIMEZONE_FORMAT = 'HH:mm:ssZ';
function willTimesCollide(event1, event2) {
    var dateEvent1 = convertTimeEventToDateEvent(event1);
    var dateEvent2 = convertTimeEventToDateEvent(event2);
    if (dateEvent2.isMultipleDays && dateEvent1.isMultipleDays) {
        return willDatesCollide(dateEvent1, dateEvent2);
    }
    else if (dateEvent1.isMultipleDays) {
        return multipleDayAndSingleDayTimeCollision(dateEvent2, dateEvent1);
    }
    else if (dateEvent2.isMultipleDays) {
        return multipleDayAndSingleDayTimeCollision(dateEvent1, dateEvent2);
    }
    return willDatesCollide(dateEvent1, dateEvent2);
}
function multipleDayAndSingleDayTimeCollision(singleDayEvent, multipleDayEvent) {
    var nextDayEvent = addDayToDateEvent(__assign({}, singleDayEvent));
    return willDatesCollide(singleDayEvent, multipleDayEvent) || willDatesCollide(multipleDayEvent, nextDayEvent);
}
function convertTimeToMoment(time) {
    return moment$2(time, TIME_WITH_TIMEZONE_FORMAT);
}

var moment$1 = require('moment');
function convertTimeEventToDateEvent(_a) {
    var start = _a.start, end = _a.end;
    var startTimeMoment = convertTimeToMoment(start);
    var endTimeMoment = convertTimeToMoment(end);
    var startDate = convertTimeToDate(start);
    var isMultipleDays = startTimeMoment.isAfter(endTimeMoment);
    var endDate = convertTimeToDate(end, isMultipleDays);
    return {
        start: startDate,
        end: endDate,
        isMultipleDays: isMultipleDays
    };
}
function convertTimeToDate(time, addDay) {
    var date = getInitialMomentDate();
    if (addDay)
        date = date.add(1, 'day');
    var dateTime = moment$1(appendDateToTime(time, date.toISOString())).toISOString();
    return dateTime;
}
function appendDateToTime(time, date) {
    return (date.slice(0, 11) + time);
}

exports.convertStringToNumber = convertStringToNumber;
exports.willDatesCollide = willDatesCollide;
exports.isInDateRange = isInDateRange;
exports.getInitialMomentDate = getInitialMomentDate;
exports.addOneDay = addOneDay;
exports.addDayToDateEvent = addDayToDateEvent;
exports.convertTimeEventToDateEvent = convertTimeEventToDateEvent;
exports.convertTimeToDate = convertTimeToDate;
exports.TIME_WITH_TIMEZONE_FORMAT = TIME_WITH_TIMEZONE_FORMAT;
exports.willTimesCollide = willTimesCollide;
exports.convertTimeToMoment = convertTimeToMoment;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=v-chronos.umd.js.map
