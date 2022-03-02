import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import selectSong from '../redux/actions';

const SongsList = () => {
  const songsList = useSelector((state) => state.songs);
  const { favoriteTitle } = songsList;
  const dispatch = useDispatch();
  const selectHandler = (song) => {
    dispatch(selectSong(song));
  };
  return (
    <div>
      {songsList.songs.map((song) => {
        if (favoriteTitle === song.title) {
          return (
            <div key={song.title}>
              {song.title}
              <small> ***favorite song</small>
              <button onClick={() => selectHandler(song)} type="button">
                Select
              </button>
            </div>
          );
        }
        return (
          <div key={song.title}>
            {song.title}
            <button onClick={() => selectHandler(song)} type="button">
              Select
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default SongsList;
