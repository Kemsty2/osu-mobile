import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import WelcomeView from '../Views/WelcomeView';
import SplashScreen from 'react-native-splash-screen';

const slides = [
  {
    key: 'one',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    backgroundColor: '#59b2ab',
  },
  {
    key: 'two',
    title: 'Title 2',
    text: 'Other cool stuff',
    backgroundColor: '#febe29',
  },
  {
    key: 'three',
    title: 'Rocket guy',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    backgroundColor: '#22bcb5',
  },
];

export type WelcomeControllerProps = {
  navigation: any;
};

const WelcomeController: React.FC<WelcomeControllerProps> = ({navigation}) => {
  React.useEffect(() => {
    SplashScreen.hide();
  });

  const _renderItem = ({item}: any) => {
    return (
      <View style={[styles.slide, {backgroundColor: item.backgroundColor}]}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  const _onDone = () => {
    navigation.replace('NoAuth');
  };

  const _onSkip = () => {
    navigation.replace('NoAuth');
  };

  return (
    <WelcomeView
      renderItem={_renderItem}
      onDone={_onDone}
      slides={slides}
      onSkip={_onSkip}
    />
  );
};

export default WelcomeController;

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
  title: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },
});
