export interface VideoEvent {
  id: number;
  timestamp: number;
  duration: number;
  zone: {
    left: number;
    top: number;
    width: number;
    height: number;
  };
}

export type EventsState = {
  eventsList: VideoEvent[];
};

export enum EventsActionTypes {
  FETCH_EVENTS = "GET_EVENTS",
  SET_EVENTS = "SET_EVENTS",
}

export interface FetchEventsAction {
  type: EventsActionTypes.FETCH_EVENTS;
}

export interface SetEventsAction {
  type: EventsActionTypes.SET_EVENTS;
  payload: VideoEvent[];
}

export type EventsAction = SetEventsAction | FetchEventsAction;
