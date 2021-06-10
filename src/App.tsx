import LayoutContent from "./components/LayoutContent/LayoutContent";
import LayoutFooter from "./components/LayoutFooter/LayoutFooter";
import LayoutHeader from "./components/LayoutHeader/LayoutHeader";

import styles from "./App.less";

function App() {
  return (
    <div className={styles.App}>
      <LayoutHeader />
      <LayoutContent />
      <LayoutFooter />
    </div>
  );
}

export default App;