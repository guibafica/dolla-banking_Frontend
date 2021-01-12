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

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon />
      </Icon>

      <SideBarWrapper>
        <SidebarMenu>
          <SidebarLink to="about">Sobre</SidebarLink>

          <SidebarLink to="discover">Descubra</SidebarLink>

          <SidebarLink to="services">Serviços</SidebarLink>

          <SidebarLink to="signup">Cadastro</SidebarLink>
        </SidebarMenu>

        <SideBtnWrap>
          <SidebarRoute to="/signin">Logar</SidebarRoute>
        </SideBtnWrap>
      </SideBarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
