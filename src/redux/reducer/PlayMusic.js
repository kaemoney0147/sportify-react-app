import { PLAY_NOW } from "../action";

const initialstate = {
  playbutton: false,
};

const playmusicReducer = (state = initialstate, action) => {
  switch (action.type) {
    case PLAY_NOW: {
      return {
        ...state,
        playbutton: action.payload,
      };
    }
    default:
      return state;
  }
};
export default playmusicReducer;
