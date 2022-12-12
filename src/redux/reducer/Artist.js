import { ARTIST_LOADING } from "../action";
const initialstat = {
  artist: [],
};

const artistReducer = (state = initialstat, action) => {
  switch (action.type) {
    case ARTIST_LOADING:
      return {
        ...state,
        artist: action.payload,
      };
    default:
      return state;
  }
};
export default artistReducer;
