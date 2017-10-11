
import { VDateLike } from '../../models/date'
import { VEvent } from '../../models/event'

export function convertStringToNumber(date: string): number {
  return new Date(date).getTime()
}

export function isCollision(eventOne: VEvent, eventTwo: VEvent): boolean {
  return (convertStringToNumber(eventTwo.start) <= convertStringToNumber(eventOne.end)) &&
   (convertStringToNumber(eventOne.start) <= convertStringToNumber(eventTwo.end))
}

export function isInRange (startDate: string, endDate: string, date: string): boolean {
  const dt = convertStringToNumber(date)
  return dt >= convertStringToNumber(startDate) && dt <= convertStringToNumber(endDate)
}
