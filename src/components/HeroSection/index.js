import React, { useState } from 'react';

import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElement';

import { 
  HeroContainer, 
  HeroBg, 
  VideoBg, 
  HeroContent,
  HeroH1, 
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './styles';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>

      <HeroContent>
        <HeroH1>Banco Virtual Facilitado</HeroH1>

        <HeroP>
          Cadastre-se para uma nova conta hoje e receba R$250 em crédito para o 
          seu próximo pagamento.
        </HeroP>

        <HeroBtnWrapper>
          <Button 
            to="signup" 
            onMouseEnter={onHover} 
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Iniciar { hover ? <ArrowForward /> : <ArrowRight /> }
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
