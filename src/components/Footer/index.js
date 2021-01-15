import React from 'react';
import { 
  FaFacebook, 
  FaInstagram, 
  FaYoutube, 
  FaTwitter, 
  FaLinkedin, 
} from 'react-icons/fa';

import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from './styles';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Sobre nós</FooterLinkTitle>

              <FooterLink to="/signin">Como isso funciona</FooterLink>
              <FooterLink to="/signin">Depoimentos</FooterLink>
              <FooterLink to="/signin">Carreiras</FooterLink>
              <FooterLink to="/signin">Investidores</FooterLink>
              <FooterLink to="/signin">Termos de Serviços</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>Contate-Nos</FooterLinkTitle>

              <FooterLink to="/signin">Contato</FooterLink>
              <FooterLink to="/signin">Suporte</FooterLink>
              <FooterLink to="/signin">Destinos</FooterLink>
              <FooterLink to="/signin">Patrocínios</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Vídeos</FooterLinkTitle>

              <FooterLink to="/signin">Envie um vídeo</FooterLink>
              <FooterLink to="/signin">Embaixadores</FooterLink>
              <FooterLink to="/signin">Agência</FooterLink>
              <FooterLink to="/signin">Influenciadores</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>Mídia Social</FooterLinkTitle>

              <FooterLink to="/signin">Instagram</FooterLink>
              <FooterLink to="/signin">Facebook</FooterLink>
              <FooterLink to="/signin">Youtube</FooterLink>
              <FooterLink to="/signin">Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>dolla</SocialLogo>
            
            <WebsiteRights>
              dolla ® {new Date().getUTCFullYear()} Todos os direitos reservados
            </WebsiteRights>

            <SocialIcons>
              <SocialIconLink 
                href="//www.facebook.com/"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>

              <SocialIconLink 
                href="//www.instagram.com/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>

              <SocialIconLink 
                href="//www.youtube.com/"
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube />
              </SocialIconLink>

              <SocialIconLink 
                href="//www.twitter.com/"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>

              <SocialIconLink 
                href="//www.linkedin.com/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
