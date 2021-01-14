import svg3 from '../../images/svg-3.svg';
import svg5 from '../../images/svg-5.svg';
import svg4 from '../../images/svg-4.svg';

export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Banco Premium',
  headline: 'Transações ilimitadas com taxa 0',
  description: 'Receba acesso ao nosso aplicativo exclusivo que permitirá o envio de transações ilimitadas sem cobrança de taxas.',
  buttonLabel: 'Iniciar',
  imgStart: true,
  img: svg3,
  alt: 'Credit Card',
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Acesso Ilimitado',
  headline: 'Acesse sua conta a qualquer momento',
  description: 'Nós cobrimos você, não importa onde você. Tudo que você precisa é uma conexão com a internet e um telefone ou computador.',
  buttonLabel: 'Saiba mais',
  imgStart: false,
  img: svg5,
  alt: 'Pig',
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Junte-se a nossa equipe',
  headline: 'Criar uma conta é extremamente fácil',
  description: 'Prepare tudo em menos de 10 minutos. Tudo que você precisa fazer é adicionar suas informações e você estará pronto para começar.',
  buttonLabel: 'Começe agora',
  imgStart: true,
  img: svg4,
  alt: 'Credit Card',
  dark: false,
  primary: false,
  darkText: true,
};
