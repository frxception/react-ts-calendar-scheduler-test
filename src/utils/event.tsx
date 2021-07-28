import { EventInput } from '@fullcalendar/react'

let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [
  // {
  //   id: createEventId(),
  //   title: 'All-day event',
  //   start: todayStr
  // },
  {
    id: createEventId(),
    title: 'First event',
    start: todayStr + 'T12:00:00',
    className: "fc-v-event-green",
    iconName: 'BsFillCalendarFill',

  }, 
  {
    id: createEventId(),
    title: 'Second event',
    start: todayStr + 'T10:00:00',
    className: "fc-v-event-yellow",
    iconName: 'BsFillEnvelopeFill'
  }, 

  {
    id: createEventId(),
    title: 'Third event',
    start: todayStr + 'T24:00:00',
    className: "fc-v-event-orange",
    iconName: 'BsChatSquareQuoteFill'

  },
  {
    id: createEventId(),
    title: 'Fourth event',
    start: todayStr + 'T30:00:00',
    className: "fc-v-event-blue",
    iconName: 'BsExclamationSquareFill'

  },
  {
    id: createEventId(),
    title: 'Fifth event',
    start: todayStr + 'T40:00:00',
    className: "fc-v-event-purple",
    iconName: 'BsChatSquareDotsFill'

  }
]

export function createEventId() {
  return String(eventGuid++)
}
