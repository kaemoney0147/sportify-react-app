import { ALBUM_LOADING } from "../action";
const initialState = {
  album: [],
};

const AlbumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALBUM_LOADING:
      return {
        ...state,
        album: action.payload,
      };
    default:
      return state;
  }
};

export default AlbumsReducer;
