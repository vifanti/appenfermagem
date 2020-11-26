import React, { useState } from 'react';

import ConectewButton from '../../components/ConectewButton';

import logoImg from '../../assets/img_banner.png';

import { Container, Image, Form, Title } from './styles';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';
import ButtonComponent from '../../components/Button';

// O component foi declarado dessa forma pois é mais fácil de
// definir a tipagem de uma variável e também fica menos verboso
const SignIn: React.FC = () => {
  /**
   * Foram removidas as funções set que são extraídas de dentro do useState pois
   * não estão sendo usadas no momento
   */
  const [baseUrl] = useState('https://staging.conectew.com.br/services/login');
  const [clientId] = useState('fbf079ce-7d38-49b1-be97-10ba01b2b9d4');
  const [responseType] = useState('code');
  const [scope] = useState('profile');
  const [redirectUri] = useState(
    encodeURIComponent('https://modulos.conectew.com.br/oauth2/callback'),
  );
  const [state] = useState(
    'eyJyZWRpcmVjdFRvIjogImh0dHA6Ly93YXJlbGluZS5jb20uYnI_cmVkaXJlY3Q9MTIzIn0',
  ); // base64Url

  const { updateToken } = useAuth();

  const handleLogin = (code: string | string[]) => {
    if (!code) return;

    api.post('/login', { code }).then(async response => {
      await updateToken(response.data);
    });
  };

  return (
    <>
      <Image source={logoImg} />
      <Container>
        <Form>
          <Title>Insira suas informações</Title>
          <ButtonComponent white>Entrar</ButtonComponent>
          <ConectewButton
            baseUrl={baseUrl}
            clientId={clientId}
            responseType={responseType}
            scope={scope}
            redirectUri={redirectUri}
            state={state}
            handleLogin={handleLogin}
          />
        </Form>
      </Container>
    </>
  );
};

export default SignIn;
