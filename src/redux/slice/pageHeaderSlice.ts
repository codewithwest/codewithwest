import { pageHeaderInitialState } from "@/helpers/general/pageHeader";
import { createSlice } from "@reduxjs/toolkit";

export const pageHeaderSlice = createSlice({
  name: "pageHeader",
  initialState: {
    value: pageHeaderInitialState,
  },
  reducers: {
    setPageHeader: (state, action) => {
      state.value.value = action.payload;
    },
  },
});

export const { setPageHeader } = pageHeaderSlice.actions;
export default pageHeaderSlice.reducer;
