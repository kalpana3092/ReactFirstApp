/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'
import React, { Component } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginView from './components/LoginView';
import TabbarView from './components/TabbarView';

const Stack = createStackNavigator()
export default class App extends Component {
  render() {
    return(
      <NavigationContainer>
        <Stack.Navigator 
        initialRouteName = 'Login' 
        screenOptions = {{
          headerStyle: {
            backgroundColor: '#df595a'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}>
         <Stack.Screen name = 'Login' 
         component = {LoginView}/>
          <Stack.Screen name = 'Home' 
         component = {TabbarView}
         options = {{ title: 'Dashboard'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

