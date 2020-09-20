import * as React from 'react';
import {useSelector} from 'react-redux';
import {selectProfile} from '../../store/reducers/profile/profile.selector';
import HomeView from '../Views/HomeView';

export type HomeControllerProps = {};

const HomeController: React.FC<HomeControllerProps> = () => {
  const profile = useSelector(selectProfile);
  return <HomeView profile={profile} />;
};

export default HomeController;
