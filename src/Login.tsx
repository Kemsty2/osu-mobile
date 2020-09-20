import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useKeycloak} from '@react-keycloak/native';

const Login = () => {
  const {keycloak} = useKeycloak();

  return (
    <View style={styles.container}>
      <Text>{`Welcome ${keycloak?.authenticated} - ${keycloak?.token}!`}</Text>
      <Button onPress={() => keycloak?.login()} title="Login" />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
