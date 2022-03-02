import React from 'react';
import { useSelector } from 'react-redux';

const SongDetails = () => {
  const songDetails = useSelector((state) => state.selectedSong) || {
    title: 'No song selected',
  };
  return (
    <ul>
      <li>
        {songDetails.title}
        {' '}
        -
        <small>
          {' '}
          {songDetails.duration}
        </small>
      </li>
    </ul>
  );
};

export default SongDetails;
