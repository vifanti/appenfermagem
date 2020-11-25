import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 10px 30px 80px 30px;
  margin-top: -10%;
  margin-bottom: 10%;
  /* border: 1px;
  border-color: red; */
`;

export const Image = styled.Image`
  width: 100%;
  height: 40%;
`;

export const Form = styled.View`
  /* flex: 1; */
  width: 100%;
  padding: 30px;
  background-color: #cccacb;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
`;

export const Footer = styled.View`
  height: 100px;
  width: 100%;

  padding: 0 14px;

  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
