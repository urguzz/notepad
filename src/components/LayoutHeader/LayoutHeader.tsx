import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Menu } from "antd";
import { Header } from "antd/lib/layout/layout";

import { addNote } from "../../reducers/notes";
import { useAppDispatch } from "../../store";

import styles from "./LayoutHeader.less";

function LayoutHeader() {
  const dispatch = useAppDispatch();
  const [addButtonIsVisible, setAddButtonIsVisible] = useState<{
    opacity: number;
    visibility: "hidden" | "visible";
  }>({
    opacity: 0,
    visibility: "hidden",
  });

  const handleAddNote = () => {
    dispatch(addNote({ noteTitle: "New note", noteContent: "Note content" }));
  };

  const handleMenuItemClick = (key: string) => {
    if (key === "2") {
      setAddButtonIsVisible({
        opacity: 1,
        visibility: "visible",
      });
    } else {
      setAddButtonIsVisible({
        opacity: 0,
        visibility: "hidden",
      });
    }
  };

  return (
    <Header className={styles.header}>
      <Menu theme="dark" mode="horizontal" className={styles.menu}>
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
        style={{
          visibility: addButtonIsVisible.visibility,
          opacity: addButtonIsVisible.opacity,
        }}
        className={styles.addButton}
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
