
"use client";

import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// This function can be called on the client side to create a new Apollo Client instance.
export const createApolloClient = () => {
  const httpLink = createHttpLink({
    uri: process.env.NEXT_PUBLIC_API_URL,
  });

  const authLink = setContext((_, { headers }) => {
    // Check if localStorage is available (client-side)
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    const userId = typeof window !== 'undefined' ? localStorage.getItem('user_id') : null;

    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        signature: token,
        user_id: userId,
      },
    };
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};
