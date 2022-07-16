import { takeEvery, put } from "redux-saga/effects";
import { setEventsAction } from "./reducers/events";
import { EventsActionTypes } from "../types/store/events";
import axios from "axios";

export function* eventsWorker() {
  try {
    const response = yield axios.get(
      "http://www.mocky.io/v2/5e60c5f53300005fcc97bbdd"
    );

    yield put(setEventsAction(response.data));
  } catch (e) {
    throw e;
  }
}

export function* eventsWatcher() {
  yield takeEvery(EventsActionTypes.FETCH_EVENTS, eventsWorker);
}
