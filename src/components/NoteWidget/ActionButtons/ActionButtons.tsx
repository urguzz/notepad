import { Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

import { deleteNote } from "../../../reducers/notes";
import { useAppDispatch } from "../../../store";

import styles from "./ActionButtons.less";

interface IProps {
  noteId: number;
  style: {
    opacity: number;
  };
}

function ActionButtons(props: IProps) {
  const { style, noteId } = props;
  const dispatch = useAppDispatch();
  const handleDeleteNote = () => {
    dispatch(deleteNote({ indexOfNoteToDelete: noteId }));
  };
  return (
    <div className={styles.actionButtons} style={style}>
      <Button
        className={styles.actionButton}
        type="primary"
        icon={<EditOutlined />}
        shape="circle"
        size="large"
      />
      <Button
        className={styles.actionButton}
        danger
        type="primary"
        icon={<DeleteOutlined />}
        shape="circle"
        size="large"
        onClick={handleDeleteNote}
      />
    </div>
  );
}

export default ActionButtons;
