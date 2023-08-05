import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingMessage from '../../components/loading';
import getMusics from '../../services/musicsAPI';
import MusicCard from '../music-card';

function Album() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [albumData, setAlbumData] = useState({});
  const [musics, setMusics] = useState([]);

  useEffect(() => {
    getMusics(id)
      .then((response) => {
        setAlbumData(response[0]);
        setMusics(response.slice(1));
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao obter informações do álbum:', error);
        setIsLoading(false);
      });
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <div><LoadingMessage /></div>
      ) : (
        <div>
          <h2 data-testid="artist-name">{albumData.artistName}</h2>
          <h3 data-testid="album-name">{albumData.collectionName}</h3>

          {musics.map(({ trackId, trackName, previewUrl }) => {
            // console.log('trackId:', trackId);

            return (
              <MusicCard
                key={ trackId }
                trackId={ trackId }
                trackName={ trackName }
                previewUrl={ previewUrl }
              />
            );
          })}

        </div>
      )}
    </div>
  );
}

export default Album;
