import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';

import { Container, Title, Footer } from './styles';

// O component foi declarado dessa forma por é mais fácil de
// definir a tipagem de uma variável e fica menos verboso
const SignIn: React.FC = () => {
  const navigation = useNavigation();

  // function handleOpenWebView() {
  //   const { baseUrl, clientId, responseType, scope, redirectUri, state } = {
  //     baseUrl: 'https://staging.conectew.com.br/services/login',
  //     clientId: 'fbf079ce-7d38-49b1-be97-10ba01b2b9d4',
  //     responseType: 'code',
  //     scope: 'profile',
  //     redirectUri: encodeURIComponent(
  //       'https://modulos.conectew.com.br/oauth2/callback',
  //     ),
  //     state:
  //       'eyJyZWRpcmVjdFRvIjogImh0dHA6Ly93YXJlbGluZS5jb20uYnI_cmVkaXJlY3Q9MTIzIn0', // base64Url
  //   };

  //   setUri(
  //     `${baseUrl}/oauth2/authorize?client_id=${clientId}&response_type=${responseType}&scope=${scope}&redirect_uri=${redirectUri}&state=${state}`,
  //   );

  // }

  return (
    <>
      <Container>
        <Title>Enfermagem</Title>
      </Container>
      <Footer>
        <Button onPress={() => navigation.navigate('WebViewScreen')}>
          Logar com Conecte/w
        </Button>
      </Footer>
    </>
  );
};

export default SignIn;
