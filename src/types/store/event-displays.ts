import { VideoEvent } from "./events";

export type DisplaysState = {
  displayList: VideoEvent[];
};

export enum DisplaysActionTypes {
  UPDATE_DISPLAYS = "UPDATE_DISPLAYS",
}

export interface UpdateDisplaysAction {
  type: DisplaysActionTypes.UPDATE_DISPLAYS;
  payload: VideoEvent[];
}

export type DisplayAction = UpdateDisplaysAction;
