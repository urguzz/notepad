import { Button } from "antd";
import { Header } from "antd/lib/layout/layout";

import { addNote } from "../../reducers/notes";
import { useAppDispatch } from "../../store";

import styles from "./LayoutHeader.less";

function LayoutHeader() {
  const dispatch = useAppDispatch();
  const handleAddNote = () => {
    dispatch(
      addNote({ noteToAdd: { title: "New note", content: "Note content" } })
    );
  };
  return (
    <Header className={styles.header}>
      <Button
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
