import { Moment } from 'moment'
const moment = require('moment')

import { willDatesCollide, getInitialMomentDate } from '../date/date.util'
import { VTimeEvent } from '../../models/time'
import { convertTimeEventToDateEvent } from '../date-time/conversion.util'

export const TIME_WITH_TIMEZONE_FORMAT = 'HH:mm:ssZ'

export function willTimesCollide(event1: VTimeEvent, event2: VTimeEvent): boolean {
  const dateEvent1 = convertTimeEventToDateEvent(event1)
  const dateEvent2 = convertTimeEventToDateEvent(event2)
  return willDatesCollide(dateEvent1, dateEvent2)
}
export function convertTimeToMoment(time: string): Moment {
  return moment(time, TIME_WITH_TIMEZONE_FORMAT)
}
