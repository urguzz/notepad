import { Button } from "antd";
import { EditOutlined, DeleteOutlined, CheckOutlined } from "@ant-design/icons";

import { deleteNote } from "../../../../reducers/notes";
import { useAppDispatch } from "../../../../store";
import Note from "../NoteWidgetCard/Note/Note";

import styles from "./ActionButtons.less";

interface IProps {
  note: Note;
  isEdited: boolean;
  onEdit: (editState: boolean) => void;
  style: {
    opacity: number;
  };
}

function ActionButtons(props: IProps) {
  const { style, note, onEdit, isEdited } = props;
  const dispatch = useAppDispatch();

  const handleDeleteNote = () => {
    dispatch(deleteNote({ indexOfNoteToDelete: note.index }));
  };

  return (
    <div className={styles.actionButtons} style={style}>
      {isEdited ? (
        <Button
          className={`${styles.actionButton} ${styles.actionConfirmButton}`}
          type="primary"
          icon={<CheckOutlined />}
          shape="circle"
          size="large"
          onClick={() => onEdit(false)}
        />
      ) : (
        <Button
          className={styles.actionButton}
          type="primary"
          icon={<EditOutlined />}
          shape="circle"
          size="large"
          onClick={() => onEdit(true)}
        />
      )}

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
