import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from './screens/SplashScreen';
import {PATH} from './constants/path';
import HomeScreen from './screens/HomeScreen';
import ConfirmScreen from './screens/ConfirmScreen';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // const timer = setTimeout(() => {
    //   setLoading(false);
    // }, 2000);
    // return clearTimeout(timer);
  }, []);
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={PATH.HOME}
          screenOptions={{headerShown: false}}>
          {loading ? (
            <Stack.Screen name={PATH.LOADING} component={SplashScreen} />
          ) : (
            <>
              <Stack.Screen name={PATH.HOME} component={HomeScreen} />
              <Stack.Screen name={PATH.LOGIN} component={LoginScreen} />
              <Stack.Screen name={PATH.REGISTER} component={RegisterScreen} />
              <Stack.Screen name={PATH.OTP} component={ConfirmScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
