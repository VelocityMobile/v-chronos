import { Moment } from 'moment';
import { VTimeEvent } from '../../models/time';
export declare const TIME_WITH_TIMEZONE_FORMAT = "HH:mm:ssZ";
export declare function willTimesCollide(event1: VTimeEvent, event2: VTimeEvent): boolean;
export declare function convertTimeToMoment(time: string): Moment;
