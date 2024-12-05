import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    role: null,
  };

const userSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {
    setrole: (state, action) => {
      state.role = action.payload;
    },
  },
});

export const { setrole } = userSlice.actions;
export default userSlice.reducer;