import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeController from '../../components/Controllers/WelcomeController';
import DrawerNavigation from './DrawerNavigations';
import NoAuthHomeController from '../../components/Controllers/NoAuthHomeController';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Main"
        component={DrawerNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Welcome"
        component={WelcomeController}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NoAuth"
        component={NoAuthHomeController}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
