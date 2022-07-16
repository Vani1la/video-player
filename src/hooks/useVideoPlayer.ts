import { useState, useEffect, useCallback } from "react";
import {
  HandleVideoProgress,
  UseVideoPlayer,
} from "../types/hooks/useVideoPlayer";

const useVideoPlayer: UseVideoPlayer = (refVideo, handleOnTimeUpdateCb) => {
  const [playerState, setPlayerState] = useState({
    isPlaying: false,
    progress: 0,
    currentTime: 0,
  });

  const togglePlay = () => {
    setPlayerState({
      ...playerState,
      isPlaying: !playerState.isPlaying,
    });
  };

  useEffect(() => {
    playerState.isPlaying ? refVideo.current.play() : refVideo.current.pause();
  }, [playerState.isPlaying, refVideo]);

  const handleOnTimeUpdate = () => {
    const progress =
      (refVideo.current.currentTime / refVideo.current.duration) * 100;
    if (handleOnTimeUpdateCb) {
      handleOnTimeUpdateCb(refVideo.current.currentTime);
    }

    setPlayerState({
      ...playerState,
      progress,
      currentTime: refVideo.current.currentTime,
    });
  };

  const handleVideoProgress: HandleVideoProgress = (event) => {
    const manualChange = Number(event.target.value);
    refVideo.current.currentTime =
      (refVideo.current.duration / 100) * manualChange;
    setPlayerState({
      ...playerState,
      progress: manualChange,
    });
  };

  const setVideoTime = useCallback(
    (ms) => {
      const second = ms / 1000;

      refVideo.current.currentTime = second;
      setPlayerState({
        ...playerState,
        progress: (second / refVideo.current.duration) * 100,
        currentTime: second,
      });
    },
    [refVideo, playerState.isPlaying]
  );

  return {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    setVideoTime,
  };
};

export default useVideoPlayer;
