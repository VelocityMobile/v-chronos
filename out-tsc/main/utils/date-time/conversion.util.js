import * as moment from 'moment-timezone';
import { convertTimeToMoment } from '../time/time.util';
import { getInitialMomentDate } from '../date/date.util';
export function convertTimeEventToDateEvent(_a) {
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
export function convertTimeToDate(time, addDay) {
    var date = getInitialMomentDate();
    if (addDay)
        date = date.add(1, 'day');
    var dateTime = moment(appendDateToTime(time, date.toISOString())).toISOString();
    return dateTime;
}
function appendDateToTime(time, date) {
    return (date.slice(0, 11) + time);
}
//# sourceMappingURL=conversion.util.js.map