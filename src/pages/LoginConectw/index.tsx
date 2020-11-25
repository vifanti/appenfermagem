import React, { useCallback, useEffect, useState } from 'react';
// import { Alert } from 'react-native';
import { WebView, WebViewNavigation } from 'react-native-webview';
import querystring from 'query-string';
import Url from 'url';

import { Container, Loading } from './styles';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

const LoginConectw: React.FC = () => {
  const [uri, setUri] = useState('');

  const { updateToken } = useAuth();

  useEffect(() => {
    const { baseUrl, clientId, responseType, scope, redirectUri, state } = {
      baseUrl: 'https://staging.conectew.com.br/services/login',
      clientId: 'fbf079ce-7d38-49b1-be97-10ba01b2b9d4',
      responseType: 'code',
      scope: 'profile',
      redirectUri: encodeURIComponent(
        'https://modulos.conectew.com.br/oauth2/callback',
      ),
      state:
        'eyJyZWRpcmVjdFRvIjogImh0dHA6Ly93YXJlbGluZS5jb20uYnI_cmVkaXJlY3Q9MTIzIn0', // base64Url
    };

    setUri(
      `${baseUrl}/oauth2/authorize?client_id=${clientId}&response_type=${responseType}&scope=${scope}&redirect_uri=${redirectUri}&state=${state}`,
    );
  }, []);

  const navigationStateChange = useCallback(
    (event: WebViewNavigation) => {
      const parsedUrl = Url.parse(event.url);

      if (!parsedUrl.search) {
        return;
      }

      const searchParams = parsedUrl.search.replace('?', '');
      const { code } = querystring.parse(searchParams);

      if (!code) {
        return;
      }

      api.post('/login', { code }).then(async response => {
        await updateToken(response.data);
      });
    },
    [updateToken],
  );

  return (
    <Container>
      <WebView
        onNavigationStateChange={navigationStateChange}
        source={{ uri }}
        renderLoading={() => <Loading />}
        startInLoadingState
      />
    </Container>
  );
};

export default LoginConectw;
