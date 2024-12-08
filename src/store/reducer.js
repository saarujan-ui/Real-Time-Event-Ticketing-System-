import { combineReducers } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import userSlice from '../Slices/userId'
import role from '../Slices/role'
import ticketPrice from '../Slices/ticketprices'
import bookedtickets from '../Slices/bookedtickets'

const appReducer = combineReducers({
  userId:userSlice,
  role:role,
  ticketPrice:ticketPrice,
  bookedtickets:bookedtickets
});

const rootReducer = (state, action) => {
  if (action.type === PURGE) {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export default rootReducer;
