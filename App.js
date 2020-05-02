import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './src/screens/home-screen'
import ComingSoonScreen from './src/screens/coming-soon-screen'
import { Text, View, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={ styles.Container }>
      <Text style={styles.Title}>The Code Evaluation</Text>
      <NavigationContainer>{
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} options={homeOptions} />
          <Tab.Screen name="Monthly average" component={ComingSoonScreen} options={averageOptions} />
          <Tab.Screen name="Calendar" component={ComingSoonScreen} options={calendarOptions} />
          <Tab.Screen name="EF Online" component={ComingSoonScreen} options={efOptions} />
        </Tab.Navigator>
      }</NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    paddingTop: 5,
  },
  Title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 5,
    textTransform: 'uppercase',
  }
});

const homeOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="home" size={25} color={tintColor} />
  )
}

const averageOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="child" size={25} color={tintColor} />
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