import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import styles from "./EventDiplays.module.scss";

const EventDisplays = () => {
  const displaysList = useTypedSelector(
    (state) => state.eventDisplays.displayList
  );

  return (
    <>
      {displaysList.map((display) => (
        <div key={display.id} style={display.zone} className={styles.display} />
      ))}
    </>
  );
};

export default React.memo(EventDisplays);
