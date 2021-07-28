import React, { FC } from "react";
import { EventApi, formatDate } from "@fullcalendar/react";
import styles from '@styles/Home.module.css'

type Props = {
  weekendsVisible: boolean;
  currentEvents: EventApi[];
  handleWeekendsToggle: (any) => void;
}

const SideBar: FC<Props> = ({
  weekendsVisible,
  currentEvents,
  handleWeekendsToggle,
}) => {
  const renderSidebarEvent = (event: EventApi) => {
    return (
      <li key={event.id}>
        <b>
          {formatDate(event.start!, {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </b>
        <i>{event.title}</i>
      </li>
    );
  };

  return (
    <div className={styles.demoAppSidebar}>
      <div className={styles.demoAppSidebarSection}>
        <label>
          <input
            type="checkbox"
            checked={weekendsVisible}
            onChange={handleWeekendsToggle}></input>
          &nbsp;Show weekends
        </label>
      </div>
      <div className={styles.demoAppSidebarSection}>
        <h2>All Events ({currentEvents.length})</h2>
        <ul>{currentEvents.map(renderSidebarEvent)}</ul>
      </div>
    </div>
  );
};

export default SideBar;
