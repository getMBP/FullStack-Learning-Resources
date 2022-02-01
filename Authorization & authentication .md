

## jwt 
https://www.youtube.com/watch?v=rCkDE2me_qk&t=979s

https://developer.okta.com/blog/2018/06/20/what-happens-if-your-jwt-is-stolen

https://www.youtube.com/watch?v=ZaLiPKw13hM&list=PLJ18l2m4Gsa_d-WrmQYi6AcjQCxRZ0wG1&index=32

#### okta 
https://www.youtube.com/watch?v=FA4dGoj4UMU

```js


import { ReactComponent as LogOutIcon } from "./images/logout.svg";
import {
  Route,
  Switch,
  useHistory,
} from "react-router-dom";

import { SecureRoute, Security, LoginCallback } from "@okta/okta-react";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";


const oktaAuth = new OktaAuth(config.oidc);


function App(props) {
  const classes = useStyles({});
  let history = useHistory();
  const [isLogin, setIsLogin] = useState(history?.location?.pathname === "/");


  const redirectToProfile = async () => {
    history.replace("/profile");
  };

  const onAuthResume = async () => {
    history.push("/dashboard");
  };

  

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(
      toRelativeUrl(originalUri || "/", window.location.origin)
    );
  };

  useEffect(() => {
    return history.listen((location) => { 
      setIsLogin(location.pathname === "/");
   }) 
  }, [history, history.location.pathname])

  return (
    <div className={classes.appContainer}>
      {!isLogin && <Sidebar items={items} />}
      <div className={isLogin ? classes.mainWrapper1 : classes.mainWrapper}>
        <div className={classes.mainContent}>
            <Security
              oktaAuth={oktaAuth}
              restoreOriginalUri={restoreOriginalUri}
            >
              <Switch>
                <SecureRoute path="/profile" component={Profile} />
             
                <SecureRoute path="/order/:id" component={excComponent} />
                <Route path="/" exact component={Login} />
                <Route
                  path="/login/callback"
                  render={(props) => (
                    <LoginCallback {...props} onAuthResume={onAuthResume} />
                  )}
                />
                <Route component={NoMatch} />
              </Switch>
            </Security>
        </div>
      </div>
    </div>
  );
}
export default App;

index.js

import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { AppProvider, MasterDataProvider } from "./providers";

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_247_GraphQLEndPoint,
});

const authLink = setContext(() => {
  return {
    headers: {
      authorization: `Bearer token`,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

      <ApolloProvider client={client}>
          <MasterDataProvider>
            <App />
          </MasterDataProvider>
        </ApolloProvider>

```
