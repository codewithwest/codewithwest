import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../../helpers/general/theme";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: initialState,
  },
  reducers: {
    setTheme: (state, action) => {
      state.theme.mode = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export const themeMode = (state: { theme: { theme: { mode: string } } }) =>
  state.theme.theme;

export default themeSlice.reducer;
