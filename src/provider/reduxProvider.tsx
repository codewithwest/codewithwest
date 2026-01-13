"use client";
import { Provider } from "react-redux";
import { ReactNode } from "react";
import { store } from "../redux/store";
import { ApolloProvider } from "@apollo/client";
import client from "@/services/apolloClient";

const ReduxProvider = ({ children }: { children: ReactNode }) => (
  <ApolloProvider client={client}>
    <Provider store={store}>{children}</Provider>
  </ApolloProvider>
);

export default ReduxProvider;
