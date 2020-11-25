import React, { useCallback, useEffect, useState } from 'react';
import { WebView, WebViewNavigation } from 'react-native-webview';
import querystring from 'querystring';
import Url from 'url';

import { Container, Loading } from './Styles';
import api from '../../services/api';

const WebViewScreen: React.FC = () => {
  const [uri, setUri] = useState('');
  const [code, setCode] = useState<string | string[]>();

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

  useEffect(() => {
    if (!code) return;

    api.post('/login', { code }).then(response => {
      console.log(response.data);
    });
  }, [code]);

  const navigationStateChange = useCallback((event: WebViewNavigation) => {
    const parsedUrl = Url.parse(event.url);

    if (parsedUrl.search) {
      const searchParams = parsedUrl.search.replace('?', '');
      const params = querystring.parse(searchParams);

      if (params.code) {
        setCode(params.code);
      }
    }
  }, []);

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

export default WebViewScreen;
