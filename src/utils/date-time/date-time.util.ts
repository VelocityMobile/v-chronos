
import { compose, nth, split } from 'ramda'

export function getTimeFromUTC(s: string): string {
  return compose((input: string) => input.substring(0, 5), nth(4), split(' '))(s)
}

