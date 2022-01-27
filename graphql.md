
#### Learn GraphQL In 40 Minutes
https://www.youtube.com/watch?v=ZQL7tL2S0oQ

https://github.com/WebDevSimplified/Learn-GraphQL
https://graphql.org/learn/queries/

// https://github.com/eggheadio-projects/graphql-query-language-notes

https://www.apollographql.com/docs/react/data/queries/#manual-execution-with-uselazyquery

#### graphql server 
https://codesandbox.io/s/e3x06

## learn from public api
https://graphql.bitquery.io/ide/T5ccItmLLj

https://github.com/APIs-guru/graphql-apis


## 
https://hasura.io/learn/graphql/react/intro-to-graphql/1-architecture/

```react


import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { interceptorsSetup, interceptorsResponse } from "./helpers/interceptor";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient, createHttpLink , InMemoryCache} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { AppProvider } from "./providers";

const interceptor = async () => {
  await interceptorsSetup();
  await interceptorsResponse();
};

interceptor();


const httpLink = createHttpLink({
  uri: 'linkToServer'
});

const authLink = setContext(() => {
  return {
    headers: {
      authorization: `Bearer 1234`,
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AppProvider>
      <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </AppProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);



```
