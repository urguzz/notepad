import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import classNames from "classnames";

import { addNote } from "../../redux/reducers/notes";
import { useAppDispatch } from "../../redux/hooks/hooks";

import styles from "./LayoutHeader.less";

function LayoutHeader() {
  const hiddenAddButtonClassName = classNames(
    styles.AddButton,
    styles.AddButton_Hidden
  );
  const addButtonClassName = classNames(styles.AddButton);

  const dispatch = useAppDispatch();
  const [isAddButtonVisible, setIsAddButtonVisible] = useState(false);

  const handleAddNote = () => {
    dispatch(addNote({ noteTitle: "New note", noteContent: "Note content" }));
  };

  const handleMenuItemClick = (key: string) => {
    localStorage.setItem("selectedMenu", JSON.stringify(key));
    setIsAddButtonVisible(key === "2" ? true : false);
  };
  /*
  const location = useLocation();
  const setSelectedMenu = () => {
    switch (location.pathname.toString()) {
      case "/":
        return ["1"];

      case "/notes":
        return ["2"];

      default:
        return [];
    }
  };
*/
  return (
    <Header className={styles.header}>
      <Menu
        theme="dark"
        mode="horizontal"
        className={styles.menu}
        //defaultSelectedKeys={setSelectedMenu()}
      >
        <Menu.Item
          key="1"
          onClick={(menuItem) => handleMenuItemClick(menuItem.key)}
        >
          <Link to="/" className={styles.link}>
            Home
          </Link>
        </Menu.Item>

        <Menu.Item
          key="2"
          onClick={(menuItem) => handleMenuItemClick(menuItem.key)}
        >
          <Link to="/notes" className={styles.link}>
            Notes
          </Link>
        </Menu.Item>

        <Menu.Item
          key="3"
          onClick={(menuItem) => handleMenuItemClick(menuItem.key)}
        >
          <Link to="/test" className={styles.link}>
            ErrorTest
          </Link>
        </Menu.Item>
      </Menu>

      <Button
        className={
          isAddButtonVisible ? addButtonClassName : hiddenAddButtonClassName
        }
        type="primary"
        shape="round"
        size="large"
        onClick={handleAddNote}
      >
        Add Note
      </Button>
    </Header>
  );
}

export default LayoutHeader;
