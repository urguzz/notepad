import { Content } from "antd/lib/layout/layout";

import WidgetList from "../../components/WidgetsField/WidgetsField";

import styles from "./NotesPage.less";

function NotesPage() {
  return (
    <Content className={styles.content}>
      <WidgetList />
    </Content>
  );
}

export default NotesPage;
