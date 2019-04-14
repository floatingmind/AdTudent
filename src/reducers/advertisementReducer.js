import _ from "lodash";
import {
  CREATE_ADVERTISEMENT,
  DELETE_ADVERTISEMENT,
  EDIT_ADVERTISEMENT,
  FETCH_ADVERTISEMENT,
  FETCH_ADVERTISEMENTS
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_ADVERTISEMENTS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_ADVERTISEMENT:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_ADVERTISEMENT:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_ADVERTISEMENT:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_ADVERTISEMENT:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
