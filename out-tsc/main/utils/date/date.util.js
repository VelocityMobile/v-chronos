import * as moment from 'moment';
export function convertStringToNumber(date) {
    return new Date(date).getTime();
}
export function willDatesCollide(eventOne, eventTwo) {
    return (convertStringToNumber(eventTwo.start) <= convertStringToNumber(eventOne.end)) &&
        (convertStringToNumber(eventOne.start) <= convertStringToNumber(eventTwo.end));
}
export function isInDateRange(startDate, endDate, date) {
    var dt = convertStringToNumber(date);
    return dt >= convertStringToNumber(startDate) && dt <= convertStringToNumber(endDate);
}
export function getInitialMomentDate(momentObject) {
    return moment(momentObject).clone().month(0).year(1971).date(1);
}
//# sourceMappingURL=date.util.js.map