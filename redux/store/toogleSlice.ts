import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface ToogleState {
  toogleState: boolean;
}

// Initial state
const initialState: ToogleState = {
  toogleState: false,
};

// Actual Slice
export const toogleSlice = createSlice({
  name: "toogle",
  initialState,
  reducers: {
    // Action to set the authentication status
    setToogle(state, action) {
      state.toogleState = action.payload;
    },
  },
});

export const { setToogle } = toogleSlice.actions;

export const selectToogle = (state: AppState) => state.toogle.toogleState;

export default toogleSlice.reducer;
