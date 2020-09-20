const ProfileFC = (decodedToken: any) => {
  return {
    email: decodedToken.email,
    name: decodedToken.name,
    userName: decodedToken.preferred_username,
    roles: decodedToken.resource_access.account.roles,
  };
};

export default ProfileFC;

export type Profile = {
  email: string;
  name: string;
  userName: string;
  roles: any[];
};
