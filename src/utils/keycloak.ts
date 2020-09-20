import {RNKeycloak} from '@react-keycloak/native';

const keycloak = new RNKeycloak({
  url: 'https://auth.osu-ekang.tk/auth',
  realm: 'Osu',
  clientId: 'Osu-Django-Backend',
});

export default keycloak;
