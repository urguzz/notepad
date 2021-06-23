import { Link } from "react-router-dom";
import { Button, Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import { LogoutOutlined } from "@ant-design/icons";

import { signOut } from "../../api/firebase/user.repository";

import styles from "./LayoutHeader.less";

function LayoutHeader() {
  return (
    <Header className={styles.header}>
      <Menu
        theme="dark"
        mode="horizontal"
        className={styles.menu}
        defaultSelectedKeys={["1"]}
      >
        <Menu.Item key="1">
          <Link to="/u/home" className={styles.link}>
            Home
          </Link>
        </Menu.Item>

        <Menu.Item key="2">
          <Link to="/u/notes" className={styles.link}>
            Notes
          </Link>
        </Menu.Item>

        <Menu.Item key="3">
          <Link to="/u/test" className={styles.link}>
            ErrorTest
          </Link>
        </Menu.Item>
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
