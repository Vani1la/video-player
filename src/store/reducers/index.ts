import { combineReducers } from "redux";
import { eventsReducer } from "./events";
import { eventDisplaysReducer } from "./event-displays";

export const rootReducer = combineReducers({
  events: eventsReducer,
  eventDisplays: eventDisplaysReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
