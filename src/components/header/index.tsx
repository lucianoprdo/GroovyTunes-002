import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUser } from '../../services/userAPI';
import LoadingMessage from '../loading';

function Header() {
  const [userName, setUserName] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUser().then((user) => {
      setUserName(user.name);
      setIsLoading(false);
    });
  }, []);

  return (
    <header data-testid="header-component">
      <nav>
        <ul>
          <li>
            <NavLink to="/search" data-testid="link-to-search">
              Pesquisar
            </NavLink>
          </li>

          <li>
            <NavLink to="/favorites" data-testid="link-to-favorites">
              Favoritos
            </NavLink>
          </li>

          <li>
            <NavLink to="/profile" data-testid="link-to-profile">
              Perfil
            </NavLink>
          </li>
        </ul>
      </nav>

      {isLoading ? (
        <div>Carregando...</div>
      ) : (
        <div data-testid="header-user-name">
          Bem-vindo(a),
          {' '}
          {userName}
          !
        </div>
      )}

    </header>
  );
}

export default Header;
