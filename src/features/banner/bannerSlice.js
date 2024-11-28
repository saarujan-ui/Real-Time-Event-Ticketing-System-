import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"; // Import axios

// Initial state for the banner slice
const initialState = {
  isLoading: false,
  error: null,
  banners: [],
  banner: null,
};

// Create banner slice
const bannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },

    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    getBannersSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.banners = action.payload;
    },
    getBannerSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.banner = action.payload;
    },
  },
});

// Export the reducer
export default bannerSlice.reducer;

// Export actions
export const { startLoading, hasError, getBannersSuccess } = bannerSlice.actions;

// Define the getBanners thunk
export const getBanners = () => async (dispatch) => {
  dispatch(startLoading());
  try {
    const response = await axios.get("/bann"); // Make GET request using axios
    dispatch(getBannersSuccess(response.data));
  } catch (error) {
    console.error("Error fetching banners:", error);
    dispatch(hasError(error.message));
  }
};
