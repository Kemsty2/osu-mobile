import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Profile} from '../../models/Profile';

export type HomeViewProps = {
  profile: Profile;
};

const HomeView: React.FC<HomeViewProps> = ({profile}) => {
  return (
    <View style={styles.container}>
      <Text>{profile ? `Bienvenue, ${profile.name}` : 'Home'}</Text>
    </View>
  );
};

export default HomeView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
