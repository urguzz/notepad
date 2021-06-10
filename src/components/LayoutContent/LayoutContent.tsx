import { Content } from "antd/lib/layout/layout";

import WidgetList from "../WidgetsField/WidgetsField";

import styles from "./LayoutContent.less";

function LayoutContent() {
  return (
    <Content className={styles.content}>
      <WidgetList />
    </Content>
  );
}

export default LayoutContent;
