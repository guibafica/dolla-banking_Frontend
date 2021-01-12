import React from 'react';

import { 
  SidebarContainer, 
  Icon, 
  CloseIcon,
  SideBarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute, 
} from './styles';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <SideBarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>Sobre</SidebarLink>

          <SidebarLink to="discover" onClick={toggle}>Descubra</SidebarLink>

          <SidebarLink to="services" onClick={toggle}>Serviços</SidebarLink>

          <SidebarLink to="signup" onClick={toggle}>Cadastro</SidebarLink>
        </SidebarMenu>

        <SideBtnWrap>
          <SidebarRoute to="/signin">Logar</SidebarRoute>
        </SideBtnWrap>
      </SideBarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
