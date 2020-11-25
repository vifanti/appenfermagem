import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useAuth } from '../../hooks/auth';

import { Container, BackButton, Title } from './styles';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <BackButton onPress={signOut}>
        <Icon
          name="log-out"
          size={24}
          style={{ transform: [{ rotate: '180deg' }] }}
        />
      </BackButton>
      <Title>Dashboard</Title>
    </Container>
  );
};

export default Dashboard;
