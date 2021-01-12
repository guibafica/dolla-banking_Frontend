import React from 'react'
import { FaBars } from 'react-icons/fa';

import { 
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks,
  NavBtn,
  NavBtnLink, 
} from './styles';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">dolla</NavLogo>

          <MobileIcon>
            <FaBars />
          </MobileIcon>

          <NavMenu>
            <NavItem>
              <NavLinks to="about">Sobre</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="discover">Descubra</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="services">Serviços</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="signup">Cadastro</NavLinks>
            </NavItem>
          </NavMenu>

          <NavBtn>
            <NavBtnLink to="/signin">Logar</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
