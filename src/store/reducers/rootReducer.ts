import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import profileReducer from './profile/profile.reducer';

const rootReducer = combineReducers({
  profile: profileReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['profile'],
  blacklist: [],
};

export default persistReducer(persistConfig, rootReducer);
