import axios from 'axios';
import qs from 'qs';

import keycloakConfig from '../config/keycloak';

const SIGNOUT_URI = keycloakConfig.issuer + '/protocol/openid-connect/logout';

export function signOut(token: string, refreshToken: string) {
  const requestBody = {
    client_id: keycloakConfig.clientId,
    client_secret: keycloakConfig.clientSecret,
    refresh_token: refreshToken,
  };

  return new Promise((resolve, reject) => {
    axios
      .post(SIGNOUT_URI, qs.stringify(requestBody), {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .then(() => {
        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });
}
