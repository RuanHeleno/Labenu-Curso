import { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { GlobalContext } from '../../contexts/GlobalContext';
import { AuthContext } from '../../contexts/Auth';

import { Container } from './styled';

import logo from '../../assets/img/logo.png';
import { goToHome, goToPosts } from '../../routes/coordinator';

const Menu = () => {
  const context = useContext(GlobalContext);
  const { showMenu, setShowMenu, menuComment, setMenuComment } = context;
  const authContext = useContext(AuthContext);
  const { logout } = authContext;

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setShowMenu(location.pathname !== '/');

    location.pathname === '/' || location.pathname === '/posts'
      ? setMenuComment(false)
      : setMenuComment(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const handleHome = () => {
    if (!localStorage.getItem('token')) goToHome(navigate);
    else goToPosts(navigate);
  };

  return (
    <Container $showMenu={showMenu}>
      {menuComment ? (
        <p className="close" onClick={() => goToPosts(navigate)}>
          X
        </p>
      ) : (
        <div></div>
      )}

      <figure onClick={handleHome}>
        <img src={logo} alt="Logo Labook" />
      </figure>

      <p className="text" onClick={logout}>
        {location.pathname === '/signup' ? 'Entrar' : 'Sair'}
      </p>
    </Container>
  );
};

export default Menu;
