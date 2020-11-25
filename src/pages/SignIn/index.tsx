import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';

import { Container, Title, Footer } from './styles';

// O component foi declarado dessa forma por é mais fácil de
// definir a tipagem de uma variável e fica menos verboso
const SignIn: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <Container>
        <Title>Enfermagem</Title>
      </Container>
      <Footer>
        <Button onPress={() => navigation.navigate('LoginConectw')}>
          Logar com Conecte/w
        </Button>
      </Footer>
    </>
  );
};

export default SignIn;
