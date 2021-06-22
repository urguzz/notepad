import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import { FirebaseAuthConsumer } from "@react-firebase/auth";

import AuthPage from "./pages/AuthPage/AuthPage";
import MainPage from "./pages/MainPage/MainPage";

import styles from "./App.less";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <FirebaseAuthConsumer>
          {(user) => {
            if (user.providerId !== null) {
              if (user.isSignedIn) {
                return <Redirect from="/auth" to="/u" />;
              }
              return <Redirect to="/auth" />;
            }
          }}
        </FirebaseAuthConsumer>
        <Switch>
          <Route exact path="/auth">
            <AuthPage />
          </Route>
          <Route path="/u">
            <MainPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
