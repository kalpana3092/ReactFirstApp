import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AboutusView from './AboutusView';
import HomeView from './HomeView';
import ProfileView from './ProfileView';

const Tab = createBottomTabNavigator();
  
export default class TabbarView extends Component {
    render(){
        return(
          <TabsView />
        );
    }
 }

  function TabsView() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: '#e91e63',
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeView}
          options={{
            tabBarLabel: 'Home',
          }}
        />
        <Tab.Screen
          name="Aboutus"
          component={AboutusView}
          options={{
            tabBarLabel: 'About Us',
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileView}
          options={{
            tabBarLabel: 'Profile',
          }}
        />
      </Tab.Navigator>
    );
  }