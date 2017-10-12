import { Moment } from 'moment';
import { VDateEvent } from '../../models/date';
export declare function convertStringToNumber(date: string): number;
export declare function willDatesCollide(eventOne: VDateEvent, eventTwo: VDateEvent): boolean;
export declare function isInDateRange(startDate: string, endDate: string, date: string): boolean;
export declare function getInitialMomentDate(momentObject?: any): Moment;
export declare function addOneDay(date: string): string;
export declare function addDayToDateEvent(dateEvent: VDateEvent): VDateEvent;
