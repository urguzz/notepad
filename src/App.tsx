import { FirebaseAuthConsumer } from "@react-firebase/auth";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";

import AuthPage from "./pages/AuthPage/AuthPage";
import NotesPage from "./pages/NotesPage/NotesPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import styles from "./App.less";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Switch>
          <Route exact path="/auth">
            <AuthPage />
          </Route>
          <Route exact path="/notes">
            <NotesPage />
          </Route>
          <Route exact path="/">
            <NotesPage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
        <FirebaseAuthConsumer>
          {(user) =>
            user.isSignedIn ? (
              <Redirect from="/auth" to="/notes" />
            ) : (
              <Redirect to="/auth" />
            )
          }
        </FirebaseAuthConsumer>
      </div>
    </BrowserRouter>
  );
}

export default App;
