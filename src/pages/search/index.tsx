import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import searchAlbumsAPI from '../../services/searchAlbumsAPI';
import LoadingMessage from '../../components/loading';
import { AlbumType } from '../../types';
import './search.css';

function Search() {
  const [name, setName] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [albums, setAlbums] = useState<AlbumType[]>([]);
  const [valueInput, setValueInput] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    setValueInput(event.target.value);
  };

  const isNameValid: boolean = name.trim().length >= 2;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    searchAlbumsAPI(name)
      .then((response) => {
        setAlbums(response);
        setIsLoading(false);
        setName('');
      })
      .catch((error) => {
        console.error('Erro ao pesquisar álbuns:', error);
        setIsLoading(false);
      });
  };

  return (
    <div>
      <h2>Pesquisar Artistas ou Bandas</h2>
      <form onSubmit={ handleSubmit }>
        <label htmlFor="artistInput">
          Nome do Artista ou Banda:
          <input
            type="text"
            id="artistInput"
            data-testid="search-artist-input"
            value={ name }
            onChange={ handleChange }
          />
        </label>

        <button
          type="submit"
          data-testid="search-artist-button"
          disabled={ !isNameValid || isLoading }
        >
          Pesquisar
        </button>
      </form>

      {isLoading ? (
        <div><LoadingMessage /></div>
      ) : (
        <div>
          {albums.length > 0 ? (
            <div>
              <h3>
                Resultado de álbuns de:
                {' '}
                {`${valueInput}`}
              </h3>
              {albums.map(({ collectionId, collectionName }) => (
                <div key={ collectionId }>
                  <Link
                    to={ `/album/${collectionId}` }
                    data-testid={ `link-to-album-${collectionId}` }
                  >
                    {collectionName}
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div>Nenhum álbum foi encontrado.</div>
          )}
        </div>
      )}
    </div>
  );
}

export default Search;
