import { MANAGE_COUNTRY_DATA } from "./dataActionType";

export default function dataReducer(state, action) {
  switch (action.type) {
    case MANAGE_COUNTRY_DATA:
      return action.payload;
    default:
      return state;
  }
}
