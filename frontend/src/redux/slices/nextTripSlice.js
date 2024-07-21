import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nextTripItems: localStorage.getItem(" nextTrip")
    ? JSON.parse(localStorage.getItem(" nextTrip"))
    : [],
};

const nextTripSlice = createSlice({
  name: "nextTrip",
  initialState,
  reducers: {
    addToNextTrip(state, action) {
      const item = action.payload;
      if (!state.nextTripItems.find((x) => x._id === item._id)) {
        state.nextTripItems = [...state.nextTripItems, item];
      }
      localStorage.setItem("nextTrip", JSON.stringify(state.nextTripItems));
    },
    removeFromNextTrip(state, action) {
      state.nextTripItems = state.nextTripItems.filter(
        (x) => x._id !== action.payload
      );
      localStorage.setItem("nextTrip", JSON.stringify(state.nextTripItems));
    },

    clearNextTrip(state) {
      state.nextTripItems = [];
      localStorage.setItem("nextTrip", JSON.stringify(state.nextTripItems));
    },
  },
});

export const { addToNextTrip, removeFromNextTrip, clearNextTrip } =
  nextTripSlice.actions;
export default nextTripSlice.reducer;
