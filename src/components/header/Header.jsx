import { Outlet } from 'react-router-dom';
import { Nav, MainContainer, NavLink, NavList } from './Header.styled';

const Header = () => {
  return (
    <MainContainer>
      <Nav>
        <NavList>
          <li>
            <NavLink to="/">Travel Mobile</NavLink>
          </li>

          <li>
            <NavLink to="/filters">Catalog</NavLink>
          </li>
          <li>
            <NavLink to="/favorite">Favorite</NavLink>
          </li>
        </NavList>
      </Nav>
      <main>
        <Outlet />
      </main>
    </MainContainer>
  );
};

export default Header;
