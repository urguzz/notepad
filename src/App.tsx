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
              const prevLocation = localStorage.getItem("prevLocation");
              if (!prevLocation?.startsWith("/u/")) {
                if (prevLocation !== "/error") {
                  return <Redirect from="/auth" to="/u" />;
                } else {
                  return <Redirect from="/auth" to={prevLocation} />;
                }
              }
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
        <Route exact path="/error">
          <NotFoundPage />
        </Route>
        <Route path="/u">
          <MainPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
