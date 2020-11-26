import React, { useCallback, useState } from 'react';
import { ViewProps, Text } from 'react-native';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { WebView, WebViewNavigation } from 'react-native-webview';

import querystring from 'query-string';
import Url from 'url';

import { Container, Button, ButtonText, OverlayView, Loading } from './styles';

interface ButtonProps extends ViewProps, Omit<RectButtonProperties, 'hitSlop'> {
  baseUrl: string;
  clientId: string;
  responseType: string;
  scope: string;
  redirectUri: string;
  state: string;
  handleLogin: (code: string | string[]) => void;
}

const ConectewButton: React.FC<ButtonProps> = ({
  baseUrl,
  clientId,
  responseType,
  scope,
  redirectUri,
  state,
  handleLogin,
  ...rest
}) => {
  const [visible, setVisible] = useState(false);
  const [uri] = useState(
    `${baseUrl}/oauth2/authorize?client_id=${clientId}&response_type=${responseType}&scope=${scope}&redirect_uri=${redirectUri}&state=${state}`,
  );

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const navigationStateChange = useCallback(
    (event: WebViewNavigation) => {
      const parsedUrl = Url.parse(event.url);

      if (!parsedUrl.search) return;

      const searchParams = parsedUrl.search.replace('?', '');
      const { code } = querystring.parse(searchParams);

      if (!code) return;

      handleLogin(code);
    },
    [handleLogin],
  );

  return (
    <>
      <Container>
        <Button rippleColor="gray" onPress={toggleOverlay} {...rest}>
          <ButtonText>
            <Text>Logar com Conect/w</Text>
          </ButtonText>
        </Button>
      </Container>
      <OverlayView
        overlayStyle={{ padding: 10, width: '90%', height: '90%' }}
        isVisible={visible}
        onBackdropPress={toggleOverlay}
      >
        <WebView
          onNavigationStateChange={navigationStateChange}
          source={{ uri }}
          renderLoading={() => <Loading />}
          startInLoadingState
        />
      </OverlayView>
    </>
  );
};

export default ConectewButton;
