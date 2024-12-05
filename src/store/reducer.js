import { combineReducers } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import cityReducer from '../features/banner/bannerSlice';
import userSlice from '../Slices/userId'
import role from '../Slices/role'

const appReducer = combineReducers({
  city: cityReducer,
  userId:userSlice,
  role:role
});

const rootReducer = (state, action) => {
  if (action.type === PURGE) {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export default rootReducer;
