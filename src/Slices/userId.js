import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    userId: null,
  };

const userSlice = createSlice({
  name: 'userId',
  initialState,
  reducers: {
    setUserID: (state, action) => {
      state.userId = action.payload;
    },
  },
});

export const { setUserID } = userSlice.actions;
export default userSlice.reducer;