import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slice/themeSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import authSliceReducer from "@/redux/slice/authSlice";
import pageHeaderReducer from "@/redux/slice/pageHeaderSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    pageHeader: pageHeaderReducer,
    auth: authSliceReducer,
  },
});

// adding types for typescirpt
type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
