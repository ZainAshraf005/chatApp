import { createSlice } from "@reduxjs/toolkit";

const persistedAuthUser = localStorage.getItem("authUser")
  ? JSON.parse(localStorage.getItem("authUser"))
  : null;

const persistedSelectedUser = localStorage.getItem("selectedUser")
  ? JSON.parse(localStorage.getItem("selectedUser"))
  : null;

const userSlice = createSlice({
  name: "user",
  initialState: {
    authUser: persistedAuthUser,
    otherUsers: null,
    isLoggedIn: !!localStorage.getItem("authUser"),
    selectedUser: persistedSelectedUser,
  },
  reducers: {
    setAuthUser: (state, action) => {
      state.authUser = action.payload;
      state.isLoggedIn = true;
      localStorage.setItem("authUser", JSON.stringify(action.payload));
    },
    setOtherUsers: (state, action) => {
      state.otherUsers = action.payload;
    },
    clearAuthUser: (state) => {
      state.authUser = null;
      state.isLoggedIn = false;
      localStorage.removeItem("authUser");
    },
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
      localStorage.setItem("selectedUser", JSON.stringify(action.payload));
    },
    clearSelectedUSer: (state) => {
      state.selectedUser = null;
      localStorage.removeItem("selectedUser");
    },
  },
});

export const { setAuthUser, setOtherUsers, clearAuthUser, setSelectedUser, clearSelectedUSer } =
  userSlice.actions;
export default userSlice.reducer;
