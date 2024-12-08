import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    role: null,
  };

const userSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {
    setroles: (state, action) => {
      state.role = action.payload;
    },
  },
});

export const { setroles } = userSlice.actions;
export default userSlice.reducer;