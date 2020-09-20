import * as React from 'react';
import {authorize} from 'react-native-app-auth';
import {useDispatch} from 'react-redux';
import keycloakConfig from '../../config/keycloak';
import NoAuthHomeView from '../Views/NoAuthHomeView';
import JwtDecode from 'jwt-decode';
import {setToken} from '../../store/reducers/profile/profile.action';
import Profile from '../../models/Profile';

const NoAuthHomeController = ({navigation}: any) => {
  const dispatch = useDispatch();

  const handleConnect = () => {
    authorize(keycloakConfig)
      .then((result) => {
        const decodedToken = JwtDecode(result.accessToken);

        dispatch(
          setToken(
            Profile(decodedToken),
            result.accessToken,
            result.refreshToken,
          ),
        );

        navigation.replace('Main');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return <NoAuthHomeView handleConnect={handleConnect} />;
};

export default NoAuthHomeController;
