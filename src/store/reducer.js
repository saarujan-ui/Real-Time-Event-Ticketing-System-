import { combineReducers } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import cityReducer from '../features/banner/bannerSlice';

const appReducer = combineReducers({
  city: cityReducer,
});

const rootReducer = (state, action) => {
  if (action.type === PURGE) {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export default rootReducer;
