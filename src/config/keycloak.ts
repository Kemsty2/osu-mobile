const keycloakConfig = {
  issuer: 'https://auth.osu-ekang.tk/auth/realms/Osu',
  clientId: 'Osu-Django-Backend',
  clientSecret: '1fe86bb5-d6ce-4f8c-8671-f586d6b7f07f',
  redirectUrl: 'com.osu://Splash',
  scopes: ['openid', 'profile'],
  dangerouslyAllowInsecureHttpRequests: true,
};

export default keycloakConfig;
