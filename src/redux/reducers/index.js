import { combineReducers } from 'redux';

const intialSongs = {
  songs: [
    { title: 'hello from other side', duration: '10:45' },
    { title: 'bell shaw', duration: '4:30' },
    { title: 'speak out', duration: '5:15' },
  ],
  favoriteTitle: 'speak out',
};
const songsListReducer = (state = intialSongs) => state;
const selectedSongReducer = (state = null, action) => {
  if (action.type === 'SONG_SELECTED') return action.payload;
  return state;
};

export default combineReducers({
  songs: songsListReducer,
  selectedSong: selectedSongReducer,
});
