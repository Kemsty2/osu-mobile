import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeStack from '../StackNavigations/HomeStack';
import DrawerContent from '../../../components/UI/DrawerContent';
import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      sceneContainerStyle={styles.container}
      drawerContent={(props) => <DrawerContent {...props} />}
      drawerStyle={styles.drawerStyle}
      drawerContentOptions={{
        activeTintColor: 'white',
        inactiveTintColor: '#000',
        activeBackgroundColor: 'transparent',
      }}>
      <Drawer.Screen name="Home" component={HomeStack} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({
  drawerStyle: {
    backgroundColor: 'white',
    width: wp('85%'),
  },
  container: {
    flex: 1,
  },
});
