import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import classNames from "classnames";
import { LogoutOutlined } from "@ant-design/icons";

import styles from "./LayoutHeader.less";
import { signOut } from "../../api/firebase/user.repository";

interface IProps {
  onClickAddButton: () => void;
}

function LayoutHeader(props: IProps) {
  const [isAddButtonVisible, setIsAddButtonVisible] = useState(false);

  const hiddenButtonClassName = classNames(styles.Button, styles.Button_Hidden);
  const buttonClassName = classNames(styles.Button);

  const handleMenuItemClick = (key: string) => {
    setIsAddButtonVisible(key === "2" ? true : false);
  };

  return (
    <Header className={styles.header}>
      <Menu
        theme="dark"
        mode="horizontal"
        className={styles.menu}
        defaultSelectedKeys={["1"]}
      >
        <Menu.Item
          key="1"
          onClick={(menuItem) => handleMenuItemClick(menuItem.key)}
        >
          <Link to="/u/home" className={styles.link}>
            Home
          </Link>
        </Menu.Item>

        <Menu.Item
          key="2"
          onClick={(menuItem) => handleMenuItemClick(menuItem.key)}
        >
          <Link to="/u/notes" className={styles.link}>
            Notes
          </Link>
        </Menu.Item>

        <Menu.Item
          key="3"
          onClick={(menuItem) => handleMenuItemClick(menuItem.key)}
        >
          <Link to="/u/test" className={styles.link}>
            ErrorTest
          </Link>
        </Menu.Item>
      </Menu>

      <Button
        className={isAddButtonVisible ? buttonClassName : hiddenButtonClassName}
        type="primary"
        shape="round"
        size="large"
        onClick={props.onClickAddButton}
      >
        Add Note
      </Button>
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
