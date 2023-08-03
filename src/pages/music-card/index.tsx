import { SongType } from '../../types';

function MusicCard({ trackName, previewUrl }: SongType) {
  return (
    <div data-testid="music-card">
      <h4>{trackName}</h4>
      <audio data-testid="audio-component" src={ previewUrl } controls>
        <track kind="captions" />
        O seu navegador não suporta o elemento
        {' '}
        <code>audio</code>
      </audio>
    </div>
  );
}

export default MusicCard;
