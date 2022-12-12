import { FOOTER_PLAYLIST } from "../action";
const initialstate = {
  songs: [],
};
const footerReducer = (state = initialstate, action) => {
  switch (action.type) {
    case FOOTER_PLAYLIST:
      return {
        ...state,
        songs: action.payload,
      };
    default:
      return state;
  }
};

export default footerReducer;
