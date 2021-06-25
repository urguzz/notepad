import { ReactNode, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import { LogoutOutlined } from "@ant-design/icons";

import { signOut } from "../../api/firebase/user.repository";

import styles from "./LayoutHeader.less";

function LayoutHeader() {
  const location = useLocation();
  const [selectedMenuId, setSelectedMenuId] = useState<string | undefined>(
    undefined
  );

  const routeMap = new Map<string, { id: string; text: string }>([
    ["/u/home", { id: "1", text: "Home" }],
    ["/u/notes", { id: "2", text: "Notes" }],
    ["/u/test", { id: "3", text: "Error" }],
  ]);

  const menus: ReactNode[] = [];
  routeMap.forEach((menu, route) => {
    menus.push(
      <Menu.Item key={menu.id}>
        <Link to={route} className={styles.link}>
          {menu.text}
        </Link>
      </Menu.Item>
    );
  });

  useEffect(() => {
    setSelectedMenuId(routeMap.get(location.pathname)?.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <Header className={styles.header}>
      <Menu
        theme="dark"
        mode="horizontal"
        className={styles.menu}
        {...(selectedMenuId ? { selectedKeys: [selectedMenuId] } : {})}
      >
        {menus}
      </Menu>
      <Button
        className={styles.Button}
        type="default"
        shape="circle"
        size="large"
        icon={<LogoutOutlined />}
        onClick={() => signOut()}
      />
    </Header>
  );
}

export default LayoutHeader;
