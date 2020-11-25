import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  margin: 0 5px;
`;

export const BackButton = styled(RectButton)`
  border: 1px;
  border-color: #000;
  margin-top: 10px;
  width: 52px;
  height: 52px;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 24px;
`;

export const Title = styled.Text`
  font-size: 48px;
`;
