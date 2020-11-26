import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const BackButton = styled(RectButton)`
  margin-top: 26px;
  width: 52px;
  height: 52px;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 26px;
`;

export const Title = styled.Text`
  font-size: 48px;
`;
