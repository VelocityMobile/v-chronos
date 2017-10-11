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

var moment$2 = require('moment');
var TIME_WITH_TIMEZONE_FORMAT = 'HH:mm:ssZ';
function willTimesCollide(event1, event2) {
    var dateEvent1 = convertTimeEventToDateEvent(event1);
    var dateEvent2 = convertTimeEventToDateEvent(event2);
    return willDatesCollide(dateEvent1, dateEvent2);
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
    var endDate;
    if (!startTimeMoment.isBefore(endTimeMoment)) {
        endDate = convertTimeToDate(end, true);
    }
    else {
        endDate = convertTimeToDate(end);
    }
    return {
        start: startDate,
        end: endDate
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

export { convertStringToNumber, willDatesCollide, isInDateRange, getInitialMomentDate, convertTimeEventToDateEvent, convertTimeToDate, TIME_WITH_TIMEZONE_FORMAT, willTimesCollide, convertTimeToMoment };
//# sourceMappingURL=v-chronos.es5.js.map
