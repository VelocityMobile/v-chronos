import * as dateUtil from './date.util'
import { VDateEvent } from '../../models/date'
import * as moment from 'moment'

describe('isCollision', () => {
  let event1: VDateEvent
  let event2: VDateEvent
  it('Events from 1-3pm and 12-2pm UTC should collide', () => {
    event1 = {
      start: '2017-10-11T13:00:00.000Z',
      end: '2017-10-11T15:00:00.150Z'
    }
    event2 = {
      start: '2017-10-11T12:00:00.000Z',
      end: '2017-10-11T14:00:00.000Z'
    }
    expect(dateUtil.willDatesCollide(event1, event2)).toBe(true)
  })
  it('Events from 12-2pm and 3pm-5pm should not collide', () => {
    event1 = {
      start: '2017-10-11T15:00:00.000Z',
      end: '2017-10-11T18:00:00.150Z'
    }
    event2 = {
      start: '2017-10-11T12:00:00.000Z',
      end: '2017-10-11T14:00:00.000Z'
    }
    expect(dateUtil.willDatesCollide(event1, event2)).toBe(false)
  })
})
describe('isInRange', () => {
  it ('today is between yesterday and tomorrow', () => {
    let startDate: string = moment().subtract(1, 'day').toISOString()
    let endDate: string = moment().add(1, 'day').toISOString()
    let date: string = moment().toISOString()
    expect(dateUtil.isInDateRange(startDate, endDate, date)).toBe(true)
  })
  it ('today is not between tomorrow and the next day', () => {
    let startDate: string = moment().add(1, 'day').toISOString()
    let endDate: string = moment().add(2, 'day').toISOString()
    let date: string = moment().toISOString()
    expect(dateUtil.isInDateRange(startDate, endDate, date)).toBe(false)
  })
})
