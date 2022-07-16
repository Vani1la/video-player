import {
  DisplaysActionTypes,
  DisplaysState,
} from "../../types/store/event-displays";
import { DisplayAction } from "../../types/store/event-displays";

const initialState: DisplaysState = {
  displayList: [],
};

export const eventDisplaysReducer = (
  state = initialState,
  action: DisplayAction
) => {
  switch (action.type) {
    case DisplaysActionTypes.UPDATE_DISPLAYS:
      const isSame =
        state.displayList.length === action.payload.length &&
        action.payload.every(
          (el, index) => state.displayList[index].id === el.id
        );

      if (isSame) {
        return state;
      }

      return { displayList: action.payload };

    default:
      return state;
  }
};

export const updateEventDisplaysAction = (payload) => ({
  type: DisplaysActionTypes.UPDATE_DISPLAYS,
  payload,
});
