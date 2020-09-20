import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Divider} from 'react-native-elements';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import DrawerItem from './DrawerItem';
import {signOut} from '../../apis';
import {unsetToken} from '../../store/reducers/profile/profile.action';
import {
  selectProfile,
  selectProfileRefreshToken,
  selectProfileToken,
} from '../../store/reducers/profile/profile.selector';
import {useDispatch, useSelector} from 'react-redux';

const DrawerContent = ({navigation}: any) => {
  const token = useSelector(selectProfileToken);
  const refreshToken = useSelector(selectProfileRefreshToken);
  const profile = useSelector(selectProfile);
  const dispatch = useDispatch();

  const handleDisconnect = () => {
    signOut(token, refreshToken)
      .then(() => {
        dispatch(unsetToken());

        navigation.navigate('NoAuth');
        //navigation.closeDrawer();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const authScreens = [
    {
      title: 'Accueil',
      styles: {marginBottom: 25},
      onPress: () => navigation.navigate('Home'),
      iconName: 'home',
      iconColor: '#000',
    },
  ];

  const noAuthScreen: any[] = [];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {profile
          ? authScreens.map((screen, index) => {
              return (
                <React.Fragment key={'drawerItem-' + index}>
                  <DrawerItem
                    title={screen.title}
                    onPress={screen.onPress}
                    iconName={screen.iconName}
                    iconColor={screen.iconColor}
                    style={screen.styles}
                  />
                  <Divider />
                </React.Fragment>
              );
            })
          : noAuthScreen.map((screen, index) => {
              return (
                <React.Fragment key={'drawerItem-' + index}>
                  <DrawerItem
                    title={screen.title}
                    onPress={screen.onPress}
                    iconName={screen.iconName}
                    iconColor={screen.iconColor}
                  />
                  <Divider key={'divier' + index} />
                </React.Fragment>
              );
            })}
      </View>
      {profile ? (
        <View style={styles.footer}>
          <Button
            title="Déconnexion"
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.buttonTitle}
            onPress={handleDisconnect}
          />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  footer: {
    height: 60,
    padding: 10,
  },
  container: {flex: 1, width: wp('85%'), backgroundColor: 'transparent'},
  buttonStyle: {
    backgroundColor: '#000',
  },
  buttonTitle: {
    color: '#FFF',
  },
});

export default DrawerContent;
