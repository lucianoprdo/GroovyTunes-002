import React, { useState } from 'react';
import { SongType } from '../../types';
import checkedHeart from '../../images/checked_heart.png';
import emptyHeart from '../../images/empty_heart.png';

function MusicCard({ trackName, previewUrl, trackId }: SongType) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const handleFavoriteChange = () => { setIsFavorite(!isFavorite); };

  const getHeartImage = () => (isFavorite ? checkedHeart : emptyHeart);

  return (
    <div>
      <h3>{trackName}</h3>
      <audio data-testid="audio-component" src={ previewUrl } controls>
        <track kind="captions" />
        O seu navegador não suporta o elemento
        {' '}
        <code>audio</code>
        .
      </audio>
      <label data-testid={ `checkbox-music-${trackId}` }>
        <input
          type="checkbox"
          onChange={ handleFavoriteChange }
          checked={ isFavorite }
        />
        <img
          src={ getHeartImage() }
          alt="favorite"
        />
      </label>
    </div>
  );
}

export default MusicCard;
