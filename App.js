import React from 'react';
import SignUpScreen from './src/Signup';
import LoginScreen from './src/Login';
import VerificationScreen from './src/Verification';
import HomeScreen from './src/Home';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const RootStack = createStackNavigator(
  {
    SignUp: SignUpScreen,
    Login: LoginScreen,
    Verification: VerificationScreen,
    Home: HomeScreen,
  },
  {
    initialRouteName: 'SignUp'
  }
);

const AppContainer = createAppContainer(RootStack);

const App = () => <AppContainer />;

export default App;