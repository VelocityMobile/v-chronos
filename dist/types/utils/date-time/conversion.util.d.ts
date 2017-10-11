import { VDateEvent } from '../../models/date';
import { VTimeEvent } from '../../models/time';
export declare function convertTimeEventToDateEvent({start, end}: VTimeEvent): VDateEvent;
export declare function convertTimeToDate(time: string, addDay?: boolean): string;
