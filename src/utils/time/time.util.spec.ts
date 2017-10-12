import * as timeUtil from './time.util'
import { VTimeEvent } from '../../models/time'

describe('willTimesCollide', () => {
  let event1: VTimeEvent
  let event2: VTimeEvent
  it('Events from 1-3pm and 12-2pm London Summertime should collide', () => {
    event1 = {
      start: '13:00:00+01:00',
      end: '15:00:00+01:00'
    }
    event2 = {
      start: '12:00:00+01:00',
      end: '15:00:00+01:00'
    }
    expect(timeUtil.willTimesCollide(event1, event2)).toBe(true)
  })
  it('Events from 1-3pm and 5-7pm London Summertime shoud not collide', () => {
    event1 = {
      start: '13:00:00+01:00',
      end: '15:00:00+01:00'
    }
    event2 = {
      start: '16:00:00+01:00',
      end: '18:00:00+01:00'
    }
    expect(timeUtil.willTimesCollide(event1, event2)).toBe(false)
  })
  it('Events from 11-1am and 11:30am-2am London Summertime shoud collide', () => {
    event1 = {
      start: '23:00:00+01:00',
      end: '01:00:00+01:00'
    }
    event2 = {
      start: '23:30:00+01:00',
      end: '02:00:00+01:00'
    }
    expect(timeUtil.willTimesCollide(event1, event2)).toBe(true)
  })
  it('Events from 11-1am and 12:30am-2am London Summertime shoud collide', () => {
    event1 = {
      start: '23:00:00+01:00',
      end: '01:00:00+01:00'
    }
    event2 = {
      start: '00:30:00+01:00',
      end: '02:00:00+01:00'
    }
    expect(timeUtil.willTimesCollide(event1, event2)).toBe(true)
  })
  it('Events from 12:30am-2am and 11-1am London Summertime shoud collide', () => {
    event2 = {
      start: '23:00:00+01:00',
      end: '01:00:00+01:00'
    }
    event1 = {
      start: '00:30:00+01:00',
      end: '02:00:00+01:00'
    }
    expect(timeUtil.willTimesCollide(event1, event2)).toBe(true)
  })
})
