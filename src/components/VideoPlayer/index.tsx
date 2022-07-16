import React, { MutableRefObject } from "react";
import useVideoPlayer from "../../hooks/useVideoPlayer";
import styles from "./VideoPlayer.module.scss";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { updateEventDisplaysAction } from "../../store/reducers/event-displays";
import { useDispatch } from "react-redux";
import EventDisplays from "../EventDisplays";
import EventsList from "../EventsList";

const VideoPlayer = () => {
  const refVideo = React.useRef() as MutableRefObject<HTMLVideoElement>;

  const eventsList = useTypedSelector((state) => state.events.eventsList);
  const dispatch = useDispatch();

  const handleOnTimeUpdateCb = (currentTime) => {
    const currentMsTime = currentTime * 1000;
    const currentEvents = eventsList.filter(({ timestamp, duration }) => {
      return timestamp <= currentMsTime && timestamp + duration > currentMsTime;
    });

    dispatch(updateEventDisplaysAction(currentEvents));
  };

  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    setVideoTime,
  } = useVideoPlayer(refVideo, handleOnTimeUpdateCb);

  return (
    <>
      <div className={styles.videoWrapper}>
        <video
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          ref={refVideo}
          onTimeUpdate={handleOnTimeUpdate}
          onClick={togglePlay}
        />
        <div className={styles.progressWrapper}>
          <input
            type="range"
            min="0"
            max="100"
            value={playerState.progress}
            onChange={(e) => handleVideoProgress(e)}
          />
        </div>
        <EventDisplays />
      </div>
      <EventsList onClick={setVideoTime} />
    </>
  );
};

export default VideoPlayer;
