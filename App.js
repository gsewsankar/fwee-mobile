import React,{useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';
import Dashboard from './screens/Dashboard';


const AppStack = createStackNavigator();

const App = () => {
  const[isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(()=>{
    AsyncStorage.getItem('alreadyLaunched').then(value=>{
      if(value == null){
        AsyncStorage.setItem('alreadyLaunched','true');
        setIsFirstLaunch(true);
      }
      else{
        setIsFirstLaunch(false);
      }
    })
  },[])

  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none" initialRouteName={isFirstLaunch ? "Onboarding" : "Login"}>
        <AppStack.Screen name="Onboarding" component={OnboardingScreen}/>
        <AppStack.Screen name="Login" component={LoginScreen}/>
        <AppStack.Screen name="Dashboard" component={Dashboard}/>
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
