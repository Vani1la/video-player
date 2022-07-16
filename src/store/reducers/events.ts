import {
  EventsState,
  EventsAction,
  EventsActionTypes,
} from "../../types/store/events";

const initialState: EventsState = {
  eventsList: [],
};

export const eventsReducer = (state = initialState, action: EventsAction) => {
  switch (action.type) {
    case EventsActionTypes.SET_EVENTS:
      return {
        eventsList: action.payload.sort((a, b) => a.timestamp - b.timestamp),
      };

    default:
      return state;
  }
};

export const getEventsAction = () => ({ type: EventsActionTypes.FETCH_EVENTS });
export const setEventsAction = (payload) => ({
  type: EventsActionTypes.SET_EVENTS,
  payload,
});
