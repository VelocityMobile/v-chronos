import { Moment } from 'moment'
const moment = require('moment')

import {
  willDatesCollide,
  getInitialMomentDate,
  addDayToDateEvent
} from '../date/date.util'

import { VTimeEvent } from '../../models/time'
import { VDateEvent } from '../../models/date'
import { convertTimeEventToDateEvent } from '../date-time/conversion.util'

export const TIME_WITH_TIMEZONE_FORMAT = 'HH:mm:ssZ'

export function willTimesCollide(event1: VTimeEvent, event2: VTimeEvent): boolean {
  const dateEvent1 = convertTimeEventToDateEvent(event1)
  const dateEvent2 = convertTimeEventToDateEvent(event2)
  if (dateEvent2.isMultipleDays && dateEvent1.isMultipleDays) {
    return willDatesCollide(dateEvent1, dateEvent2)
  } else if (dateEvent1.isMultipleDays) {
    return multipleDayAndSingleDayTimeCollision(dateEvent2, dateEvent1)
  } else if (dateEvent2.isMultipleDays) {
    return multipleDayAndSingleDayTimeCollision(dateEvent1, dateEvent2)
  }
  return willDatesCollide(dateEvent1, dateEvent2)
}

function multipleDayAndSingleDayTimeCollision(singleDayEvent: VDateEvent, multipleDayEvent: VDateEvent): boolean {
  const nextDayEvent = addDayToDateEvent({ ...singleDayEvent })
  return willDatesCollide(singleDayEvent, multipleDayEvent) || willDatesCollide(multipleDayEvent, nextDayEvent)
}
export function convertTimeToMoment(time: string): Moment {
  return moment(time, TIME_WITH_TIMEZONE_FORMAT)
}
