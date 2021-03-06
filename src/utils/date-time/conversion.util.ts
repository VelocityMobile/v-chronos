
const moment = require('moment')

import { VDateEvent } from '../../models/date'
import { VTimeEvent } from '../../models/time'
import { convertTimeToMoment } from '../time/time.util'
import { getInitialMomentDate } from '../date/date.util'

export function convertTimeEventToDateEvent({ start, end }: VTimeEvent): VDateEvent {
  const startTimeMoment = convertTimeToMoment(start)
  const endTimeMoment = convertTimeToMoment(end)
  const startDate = convertTimeToDate(start)
  const isMultipleDays = startTimeMoment.isAfter(endTimeMoment)
  const endDate = convertTimeToDate(end, isMultipleDays)

  return {
    start: startDate,
    end: endDate,
    isMultipleDays
  }
}

export function convertTimeToDate(time: string, addDay?: boolean): string {
    let date = getInitialMomentDate()
    if (addDay) date = date.add(1, 'day')
    const dateTime = moment(
        appendDateToTime(time, date.toISOString())
    ).toISOString()
    return dateTime
}

function appendDateToTime(time: string, date: string): string {
  return (date.slice(0, 11) + time)
}
