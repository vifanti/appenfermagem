import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';

import logoImg from '../../assets/img_banner.png';

import { Container, Image, Form, Title } from './styles';

// O component foi declarado dessa forma por é mais fácil de
// definir a tipagem de uma variável e fica menos verboso
const SignIn: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <Image source={logoImg} />
      <Container>
        <Form>
          <Title>Insira suas informações</Title>
          <Button onPress={() => navigation.navigate('LoginConectw')}>
            Logar com Conecte/w
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default SignIn;
