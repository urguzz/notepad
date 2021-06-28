import { Switch, Route, Redirect } from "react-router-dom";
import { FirebaseAuthConsumer } from "@react-firebase/auth";

import AuthPage from "./pages/AuthPage/AuthPage";
import MainPage from "./pages/MainPage/MainPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import styles from "./App.less";

function App() {
  return (
    <div className={styles.App}>
      <FirebaseAuthConsumer>
        {(user) => {
          if (user.providerId !== null) {
            if (user.isSignedIn) {
              return <Redirect from="/auth" to="/home" />;
            } else {
              return (
                <Route path="*">
                  <Redirect to="/auth" />
                </Route>
              );
            }
          }
        }}
      </FirebaseAuthConsumer>
      <Switch>
        <Route exact path="/auth">
          <AuthPage />
        </Route>
        <Route path="/home">
          <MainPage />
        </Route>
        <Route exact path="/error">
          <NotFoundPage />
        </Route>
        <FirebaseAuthConsumer>
          {(user) => {
            if (user.providerId !== null && user.isSignedIn) {
              return (
                <Route path="*">
                  <Redirect to="/error" />
                </Route>
              );
            }
          }}
        </FirebaseAuthConsumer>
      </Switch>
    </div>
  );
}

export default App;
