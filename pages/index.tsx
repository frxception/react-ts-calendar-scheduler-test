import React, { FC, useState } from 'react';
import Head from 'next/head';
import FullCalendar, { EventApi, DateSelectArg, EventClickArg, EventContentArg } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

import CustomFooter from '@src/components/Footer'
import styles from '@styles/Home.module.css'
import { createEventId, INITIAL_EVENTS } from '@src/utils/event';
import SideBar from '@src/components/SideBar';
// @ts-ignore
interface Props  {
  weekendsVisible: Boolean;
  currentEvents: EventApi[];
}


// @ts-ignore
const Home:FC<Props> = (props) => {
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);

  const renderEventContent = (eventContent: EventContentArg) => {
    return (
      <>
        <b>{eventContent.timeText}</b>
        <i>{eventContent.event.title}</i>
      </>
    )
  }
  

  const handleEventClick = (clickInfo: EventClickArg) => {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()
    }
  }

  const handleEvents = (events: EventApi[]) => {
    setCurrentEvents(events);
  }

  
  const handleWeekendsToggle = () => {
    // this.setState({
    //   weekendsVisible: !this.state.weekendsVisible
    // })
    setWeekendsVisible(!weekendsVisible)
  }

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    }
  }
  
  return (
    
    <>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>


          <div className={styles.demoApp}>
            <SideBar weekendsVisible={weekendsVisible} currentEvents={currentEvents} 
              handleWeekendsToggle={handleWeekendsToggle}/>
              
            <div className={styles.demoAppMain}>
                <FullCalendar
                  plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                  headerToolbar={{
                    left: 'prev,next today',
                    right: 'title',
                    center: 'dayGridMonth,timeGridWeek,timeGridDay'
                  }}
                  initialView='dayGridMonth'
                  editable={true}
                  selectable={true}
                  selectMirror={true}
                  dayMaxEvents={true}
                  weekends={weekendsVisible}
                  initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                  select={handleDateSelect}
                  eventContent={renderEventContent} // custom render function
                  eventClick={handleEventClick}
                  eventsSet={handleEvents} // called after events are initialized/added/changed/removed
                  /* you can update a remote database when these fire:
                  eventAdd={function(){}}
                  eventChange={function(){}}
                  eventRemove={function(){}}
                  */
                />
              </div>
          </div>


        </main>


        <CustomFooter />
         
      </div>
    </>
  )
}


export default Home;