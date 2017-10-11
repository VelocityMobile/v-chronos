import * as moment from 'moment'
import { VDateEvent } from '../../models/date'

export function convertStringToNumber(date: string): number {
  return new Date(date).getTime()
}

export function willDatesCollide(eventOne: VDateEvent, eventTwo: VDateEvent): boolean {
  return (convertStringToNumber(eventTwo.start) <= convertStringToNumber(eventOne.end)) &&
   (convertStringToNumber(eventOne.start) <= convertStringToNumber(eventTwo.end))
}

export function isInDateRange (startDate: string, endDate: string, date: string): boolean {
  const dt = convertStringToNumber(date)
  return dt >= convertStringToNumber(startDate) && dt <= convertStringToNumber(endDate)
}

export function getInitialMomentDate(momentObject?: any): any {
  return moment(momentObject).clone().month(0).year(1971).date(1)
}
