import * as moment from 'moment';
import { willDatesCollide } from '../date/date.util';
import { convertTimeEventToDateEvent } from '../date-time/conversion.util';
export var TIME_WITH_TIMEZONE_FORMAT = 'HH:mm:ssZ';
export function willTimesCollide(event1, event2) {
    var dateEvent1 = convertTimeEventToDateEvent(event1);
    var dateEvent2 = convertTimeEventToDateEvent(event2);
    return willDatesCollide(dateEvent1, dateEvent2);
}
export function convertTimeToMoment(time) {
    return moment(time, TIME_WITH_TIMEZONE_FORMAT);
}
//# sourceMappingURL=time.util.js.map