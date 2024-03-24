import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const MainContainer = styled.div`
  width: 1394px;
  margin: 0 auto;
  padding: 0 40px 20px 40px;
`;

export const Nav = styled.nav`
  border-radius: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  height: 50px;
  background-color: #f7f7f7;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 200px;
  width: 166px;
  height: 40px;
  color: #e44848;

  background-color: white;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &.active,
  :hover,
  :focus {
    background-color: #d84343;
    color: white;
  }
`;
