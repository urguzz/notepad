import { ReactNode } from "react";
import { Button, Dropdown, Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import { LogoutOutlined, TranslationOutlined } from "@ant-design/icons";
import { MenuInfo } from "rc-menu/lib/interface";
import { useTranslation } from "react-i18next";

import styles from "./LayoutHeader.less";

interface IProps {
  onSignOut?: () => void;
  onChangeTab?: (tabKey: string) => void;
}

function LayoutHeader(props: IProps) {
  const { onChangeTab, onSignOut } = props;
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };
  const handleOnChangeTab = (menu: MenuInfo) => {
    if (onChangeTab) {
      onChangeTab(menu.key);
    }
  };

  const navigationMenu: ReactNode[] = [];
  const navigationMenuMap = new Map<string, string>([
    ["0", t("main.Home")],
    ["1", t("main.Notes")],
  ]);
  navigationMenuMap.forEach((name, key) => {
    navigationMenu.push(
      <Menu.Item
        key={key}
        onClick={handleOnChangeTab}
        className={styles.MenuItem}
      >
        {name}
      </Menu.Item>
    );
  });

  const languageMenu = (
    <Menu>
      <Menu.Item key="ru" onClick={() => changeLanguage("ru")}>
        Русский
      </Menu.Item>
      <Menu.Item key="en" onClick={() => changeLanguage("en")}>
        English
      </Menu.Item>
    </Menu>
  );

  return (
    <Header className={styles.Header}>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["0"]}
        className={styles.Menu}
      >
        {navigationMenu}
      </Menu>
      <Dropdown overlay={languageMenu} placement="bottomCenter">
        <Button
          className={styles.Button}
          type="default"
          shape="circle"
          size="large"
          icon={<TranslationOutlined />}
        />
      </Dropdown>
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
