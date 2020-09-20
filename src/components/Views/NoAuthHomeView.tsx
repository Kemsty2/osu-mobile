import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const NoAuthHomeView = ({handleConnect}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}> Bienvenue sur Osu</Text>
        <Text style={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
          animi
        </Text>
      </View>
      <Button
        buttonStyle={styles.buttonStyle}
        titleStyle={styles.btnTitle}
        onPress={handleConnect}
        title="Connexion"
        raised={true}
      />
    </View>
  );
};

export default NoAuthHomeView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5AB873',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  textContainer: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 34,
    textAlign: 'center',
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    fontSize: 16,
  },
  buttonStyle: {
    alignSelf: 'flex-end',
    backgroundColor: '#000',
    width: wp('85%'),
  },
  btnTitle: {},
});
