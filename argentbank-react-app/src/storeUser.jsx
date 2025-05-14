import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: null,
    isAuthenticated: false,
    profile: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
    },
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      state.profile = null;
    },
  },
});

export const { setToken, setProfile, logout } = userSlice.actions;
export default userSlice.reducer;
