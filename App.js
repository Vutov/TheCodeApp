import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './src/componenets/screens/home-screen'
import ExploreScreen from './src/componenets/screens/montly-average-screen'
import ComingSoonScreen from './src/componenets/screens/coming-soon-screen'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>{
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} options={homeOptions} />
            <Tab.Screen name="Monthly average" component={ExploreScreen} options={averageOptions} />
            <Tab.Screen name="Calendar" component={ComingSoonScreen} options={calendarOptions} />
            <Tab.Screen name="EF Online" component={ComingSoonScreen} options={efOptions} />
        </Tab.Navigator>
      }</NavigationContainer>
  );
}

const homeOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="home" size={25} color={tintColor} />
  )
}

const averageOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="calculator" size={25} color={tintColor} />
  )
}

const calendarOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="calendar" size={25} color={tintColor} />
  )
}

const efOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="commenting" size={25} color={tintColor} />
  )
}