import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  initialState: {
    isLoggedIn: false,
    isLogging: false,
    user: { id: null, name: null },
  },
  name: "auth",
  reducers: {
    login(state, action) {
      state.isLogging = true;
    },
    loginSucces(state, action) {
      state.isLoggedIn = true;
      state.isLogging = false;
      state.user = action.payload;
    },
    loginFailed(state, action) {
      state.isLogging = false;
    },

    logout(state, action) {
      state.isLoggedIn = false;
      state.user = undefined;
    },
  },
});

//Actions
const authActions = authSlice.actions;
// selectors
const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
const selectIsLogging = (state) => state.auth.isLogging;
// reducer
const authReducer = authSlice.reducer;

export default authReducer;
export { authActions, selectIsLoggedIn, selectIsLogging };
