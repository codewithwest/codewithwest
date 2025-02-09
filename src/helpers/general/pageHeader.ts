export type pageHeaderType = {
  theme?: object;
  value: string;
};

// the initial state for theme is dark
export const pageHeaderInitialState: pageHeaderType = {
  value: "dark",
};
