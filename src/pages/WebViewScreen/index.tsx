import React, { useState } from 'react';
import { WebView } from 'react-native-webview';

const WebViewScreen: React.FC = () => {
  const [uri, setUri] = useState('');
  return <WebView source={{ uri: 'https://google.com' }} />;
};

export default WebViewScreen;
