import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";

import WidgetList from "./containers/WidgetList/WidgetList";
import NotFoundPage from "./containers/NotFoundError/NotFoundError";
import LayoutHeader from "./containers/LayoutHeader/LayoutHeader";
import LayoutFooter from "./containers/LayoutFooter/LayoutFooter";

import styles from "./App.less";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <LayoutHeader />
        <div className={styles.content}>
          <Switch>
            <Route exact path="/notes">
              <WidgetList />
            </Route>
            <Route exact path="/not-found">
              <NotFoundPage />
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
