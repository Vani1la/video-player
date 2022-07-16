import { ChangeEvent, MutableRefObject } from "react";

export interface PlayerState {
  isPlaying: boolean;
  progress: number;
}

export type HandleVideoProgress = (
  event: ChangeEvent<HTMLInputElement>
) => void;

export type UseVideoPlayer = (
  refVideo: MutableRefObject<HTMLVideoElement>,
  handleOnTimeUpdateCb: (currentTime: number) => void
) => {
  playerState: PlayerState;
  togglePlay: () => void;
  handleOnTimeUpdate: () => void;
  handleVideoProgress: HandleVideoProgress;
  setVideoTime: (ms: number) => void;
};
