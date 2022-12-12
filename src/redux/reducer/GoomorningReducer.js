import { MUSIC_LOADING } from "../action";

const initialState = {
  listofmusic: [],
};

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case MUSIC_LOADING:
      return {
        ...state,
        listofmusic: action.payload,
      };
    default:
      return state;
  }
};

export default musicReducer;
