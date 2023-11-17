import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { createGlobalStyle } from "styled-components";
import App from "./App.jsx";
import store from "./store/store.js";
import { Provider } from "react-redux";

const client = new ApolloClient({
  uri: `${import.meta.env.VITE_URL}/graphql/`,
  cache: new InMemoryCache(),
});

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 100vh;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    background: #12203E;
    font-family: Open-Sans, sans-serif;
  }
`;

// background: #12203E;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <GlobalStyle />
        <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
);
