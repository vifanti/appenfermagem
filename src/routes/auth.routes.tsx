import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import LoginConectw from '../pages/LoginConectw';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: '#fff' },
      }}
    >
      <Auth.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Auth.Screen
        name="LoginConectw"
        component={LoginConectw}
        options={{
          headerStyle: { backgroundColor: '#e01111' },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitle: 'Login Único',
        }}
      />
    </Auth.Navigator>
  );
};

export default AuthRoutes;
