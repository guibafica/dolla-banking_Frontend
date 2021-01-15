import React from 'react';

import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from './styles';

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">dolla</Icon>

          <FormContent>
            <Form action="#">
              <FormH1>Faça login em sua conta</FormH1>

              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required />

              <FormLabel htmlFor='for'>Senha</FormLabel>
              <FormInput type='password' required />

              <FormButton type='submit'>Continuar</FormButton>

              <Text>Esqueci minha senha</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
