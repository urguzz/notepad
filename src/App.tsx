import { useEffect } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { FirebaseAuthConsumer } from "@react-firebase/auth";

import AuthPage from "./pages/AuthPage/AuthPage";
import MainPage from "./pages/MainPage/MainPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import styles from "./App.less";

function App() {
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem("prevLocation", location.pathname);
  }, [location]);

  return (
    <div className={styles.App}>
      <FirebaseAuthConsumer>
        {(user) => {
          if (user.providerId !== null) {
            if (user.isSignedIn) {
              return <Redirect from="/auth" to="/u" />;
            }
            return (
              <Route path="*">
                <Redirect to="/auth" />
              </Route>
            );
          }
        }}
      </FirebaseAuthConsumer>
      <Switch>
        <Route exact path="/auth">
          <AuthPage />
        </Route>
        <Route exact path="/error">
          <NotFoundPage />
        </Route>
        <Route path="/u">
          <MainPage />
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
