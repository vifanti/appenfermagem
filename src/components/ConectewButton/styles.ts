import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Overlay } from 'react-native-elements';
import { ActivityIndicator } from 'react-native';

interface ContainerProps {
  white?: boolean;
}

type Textprops = ContainerProps;

export const Container = styled.View<ContainerProps>`
  border-radius: 10px;
  margin-bottom: 10px;

  background: #000;

  ${props =>
    props.white &&
    css`
      border: 4px;
      border-color: #000;
      background: #fff;
    `};

  width: 100%;
  height: 60px;

  justify-content: center;
  align-items: center;
`;

export const Button = styled(RectButton)`
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text<Textprops>`
  font-size: 20px;
  color: #fff;
  text-align: center;

  ${props =>
    props.white &&
    css`
      color: #000;
    `}; /* text-transform: uppercase; */
`;

export const OverlayView = styled(Overlay)`
  width: 200px;
  margin: 100px;
  padding: 100px;
`;

export const Loading = styled(ActivityIndicator).attrs({
  color: '#000',
  size: 'large',
})`
  flex: 1;
  position: absolute;
  height: 100%;
  width: 100%;
`;
