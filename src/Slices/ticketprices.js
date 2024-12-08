import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    ticketPrice: null,
  };

const userSlice = createSlice({
  name: 'ticketPrice',
  initialState,
  reducers: {
    setTicketPrice: (state, action) => {
      state.ticketPrice = action.payload;
    },
  },
});

export const { setTicketPrice } = userSlice.actions;
export default userSlice.reducer;