import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeController from '../../../components/Controllers/HomeController';
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeController} />
    </Stack.Navigator>
  );
};

export default HomeStack;
