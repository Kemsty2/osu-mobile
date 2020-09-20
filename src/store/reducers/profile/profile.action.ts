import {refresh} from 'react-native-app-auth';
import {
  SECURITY_SET_TOKEN,
  SECURITY_UNSET_TOKEN,
  SECURITY_RENEW_TOKEN,
} from './profile.types';
import keycloakConfig from '../../../config/keycloak';

export const renewToken = (refreshToken: any) => (dispatch: any) => {
  return new Promise((resolve) => {
    refresh(keycloakConfig, {
      refreshToken: refreshToken,
    })
      .then((res) => {
        dispatch({
          type: SECURITY_RENEW_TOKEN,
          payload: {
            token: res.accessToken,
            refreshToken: res.refreshToken,
          },
        });
        resolve(true);
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: SECURITY_UNSET_TOKEN,
        });
        resolve(false);
      });
  });
};

export const setToken = (profile: any, token: string, refreshToken: string) => (
  dispatch: any,
) => {
  dispatch({
    type: SECURITY_SET_TOKEN,
    payload: {
      profile,
      token,
      refreshToken,
    },
  });
};

export const unsetToken = () => (dispatch: any) => {
  dispatch({
    type: SECURITY_UNSET_TOKEN,
  });
};

export const logout = () => (dispatch: any) => {
  return new Promise((resolve) => {
    dispatch({
      type: SECURITY_UNSET_TOKEN,
    });

    resolve();
  });
};
