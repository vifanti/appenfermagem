import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';

interface Token {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  tokenData: Token | undefined;
  loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  updateToken(token: Token): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [tokenData, setTokenData] = useState<Token>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      const token = await AsyncStorage.getItem('@Enfermagem:tokenData');

      if (token) {
        const parsedTokenData = JSON.parse(token);
        api.defaults.headers.authorization = `Bearer ${parsedTokenData.access_token}`;

        setTokenData(parsedTokenData);
      }

      setLoading(false);
    }

    loadStoragedData();
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });

    const token = response.data;

    await AsyncStorage.setItem('@Enfermagem:tokenData', JSON.stringify(token));

    api.defaults.headers.authorization = `Bearer ${token.access_token}`;

    setTokenData(token);
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.removeItem('@Enfermagem:tokenData');

    setTokenData(undefined);
  }, []);

  const updateToken = useCallback(async (token: Token) => {
    await AsyncStorage.setItem('@Enfermagem:tokenData', JSON.stringify(token));

    setTokenData(token);
  }, []);

  return (
    <AuthContext.Provider
      value={{ tokenData, loading, signIn, signOut, updateToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
