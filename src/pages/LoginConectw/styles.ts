import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';

export const Container = styled.View`
  flex: 1;
  /* border: 5px; */
  /* border-color: blue; */
`;

export const Loading = styled(ActivityIndicator).attrs({
  color: '#0a1142',
  size: 'large',
})`
  flex: 1;
  position: absolute;
  height: 100%;
  width: 100%;
`;
