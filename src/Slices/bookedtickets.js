import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    bookedtickets: {},
  };

const userSlice = createSlice({
  name: 'bookedtickets',
  initialState,
  reducers: {
    setBookedtickets: (state, action) => {
      state.bookedtickets = action.payload;
    },
  },
});

export const { setBookedtickets } = userSlice.actions;
export default userSlice.reducer;