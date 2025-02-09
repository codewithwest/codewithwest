"use client";
import { Provider } from "react-redux";
import { ReactNode } from "react";
import { store } from "../redux/store";

const ReduxProvider = ({ children }: { children: ReactNode }) => (
  <Provider store={store}>{children}</Provider>
);

export default ReduxProvider;
