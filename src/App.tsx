import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";

import NotesPage from "./containers/NotesPage/NotesPage";
import ErrorPage from "./containers/ErrorPage/ErrorPage";
import LayoutHeader from "./components/LayoutHeader/LayoutHeader";
import LayoutFooter from "./components/LayoutFooter/LayoutFooter";

import styles from "./App.less";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <LayoutHeader />
        <div className={styles.content}>
          <Switch>
            <Route exact path="/notes">
              <NotesPage />
            </Route>
            <Route exact path="/not-found">
              <ErrorPage />
            </Route>
            <Route exact path="/" />
            <Route>
              <Redirect to="/not-found" />
            </Route>
          </Switch>
        </div>
        <LayoutFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
