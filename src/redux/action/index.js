export const MUSIC_LOADING = "MUSIC_LOADING";
export const ALBUM_LOADING = "ALBUM_LOADING";
export const ARTIST_LOADING = "ARTIST_LOADING";
export const INPUT_SEARCH = "INPUT_SEARCH";
export const FOOTER_PLAYLIST = "FOOTER_PLAYLIST";
export const PLAY_NOW = "PLAY_NOW";

let url = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

export const inputQuery = () => {
  return {
    type: INPUT_SEARCH,
  };
};

export const playlist = (music) => {
  return {
    type: FOOTER_PLAYLIST,
    payload: music,
  };
};
export const playmusic = (music) => {
  return {
    type: PLAY_NOW,
    payload: music,
  };
};

export const fecthMusicList = (query) => {
  return async (dispatch, getState) => {
    if (query.length > 0) {
      try {
        const response = await fetch(url + query);
        if (response.ok) {
          let data = await response.json();
          const fecthMusic = data.data;
          console.log(fecthMusic);
          dispatch({
            type: MUSIC_LOADING,
            payload: fecthMusic,
          });
        } else {
          alert("Error fetching results");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
};

export const albumMusic = (query) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(url + query);
      if (response.ok) {
        let data = await response.json();
        const albums = data.data;
        console.log(albums);
        dispatch({
          type: ALBUM_LOADING,
          payload: albums,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const artistMusic = (query) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(url + query);
      if (response.ok) {
        let data = await response.json();
        const artists = data.data;
        console.log(artists);
        dispatch({
          type: ARTIST_LOADING,
          payload: artists,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
