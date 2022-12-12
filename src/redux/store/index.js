import { configureStore } from "@reduxjs/toolkit";
import GoomorningReducer from "../reducer/GoomorningReducer";
import AlbumReducer from "../reducer/AlbumReducer";
import { combineReducers } from "@reduxjs/toolkit";
import artistReducer from "../reducer/Artist";
import InputReducer from "../reducer/searchReducer";
import footerReducer from "../reducer/FooterReducer";
import playmusicReducer from "../reducer/PlayMusic";
const finalReducer = combineReducers({
  bill: GoomorningReducer,
  albumpage: AlbumReducer,
  artistpage: artistReducer,
  input: InputReducer,
  playlist: footerReducer,
  play: playmusicReducer,
});
const store = configureStore({
  reducer: finalReducer,
});
export default store;
