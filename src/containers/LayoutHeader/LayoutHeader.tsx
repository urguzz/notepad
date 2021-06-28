import { ReactNode } from "react";
import { Button, Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import { LogoutOutlined } from "@ant-design/icons";
import { MenuInfo } from "rc-menu/lib/interface";

import styles from "./LayoutHeader.less";

interface IProps {
  onSignOut?: () => void;
  onChangeTab?: (tabKey: string) => void;
}

function LayoutHeader(props: IProps) {
  const { onChangeTab, onSignOut } = props;

  const handleOnChangeTab = (menu: MenuInfo) => {
    if (onChangeTab) {
      onChangeTab(menu.key);
    }
  };

  const menus: ReactNode[] = [];
  const menuMap = new Map<string, string>([
    ["0", "Home"],
    ["1", "Notes"],
  ]);
  menuMap.forEach((name, key) => {
    menus.push(
      <Menu.Item
        key={key}
        onClick={handleOnChangeTab}
        className={styles.MenuItem}
      >
        {name}
      </Menu.Item>
    );
  });

  return (
    <Header className={styles.Header}>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["0"]}
        className={styles.Menu}
      >
        {menus}
      </Menu>
      <Button
        className={styles.Button}
        type="default"
        shape="circle"
        size="large"
        icon={<LogoutOutlined />}
        onClick={onSignOut}
      />
    </Header>
  );
}

export default LayoutHeader;
