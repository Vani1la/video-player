import React from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { getEventsAction } from "../../store/reducers/events";
import { msToTime } from "../../utils/msToTime";
import styles from "./EventsList.module.scss";

interface Props {
  onClick: (ms: number) => void;
}

const EventsList: React.FC<Props> = ({ onClick }) => {
  const dispatch = useDispatch();
  const eventsList = useTypedSelector((state) => state.events.eventsList);

  React.useEffect(() => {
    dispatch(getEventsAction());
  }, []);

  return (
    <div className={styles.container}>
      {eventsList.map((eventItem) => (
        <div
          key={eventItem.id}
          className={styles.eventItem}
          onClick={() => onClick(eventItem.timestamp)}
        >
          {msToTime(eventItem.timestamp)}
        </div>
      ))}
    </div>
  );
};

export default React.memo(EventsList);
