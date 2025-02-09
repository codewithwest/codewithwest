export type ThemeType = {
  theme?: object;
  mode: string;
};

// the initial state for theme is dark
export const initialState: ThemeType = {
  mode: "dark",
};
