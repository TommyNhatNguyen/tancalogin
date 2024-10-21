import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from './screens/SplashScreen';
import {PATH} from './constants/path';

import ConfirmScreen from './screens/ConfirmScreen';
import {useSelector} from 'react-redux';
import {RootState, useAppDispatch} from './store/store';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import {tokenMethod} from './utils/tokenMethod';
import {loginUser} from './store/slices/authSlice';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const [loading, setLoading] = useState(true);
  const {isLogin} = useSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function getToken() {
      setLoading(true);
      try {
        const response = await tokenMethod.getData();
        if (response?.token) {
          dispatch(loginUser());
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getToken();
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={PATH.WELCOME}
          screenOptions={{headerShown: false}}>
          {!isLogin && !loading ? (
            <>
              <Stack.Screen name={PATH.WELCOME} component={WelcomeScreen} />
              <Stack.Screen name={PATH.LOGIN} component={LoginScreen} />
              <Stack.Screen name={PATH.REGISTER} component={RegisterScreen} />
              <Stack.Screen name={PATH.OTP} component={ConfirmScreen} />
            </>
          ) : (
            <Stack.Screen name={PATH.HOME} component={HomeScreen} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
