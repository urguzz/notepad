import { Button } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";

import { deleteNote } from "../../../../reducers/notes";
import { useAppDispatch } from "../../../../store";
import Note from "../NoteWidgetCard/Note/Note";

import styles from "./ActionButtons.less";

interface IProps {
  note: Note;
  isEditModeEnabled: boolean;
  onChangeEditMode: (editModeEnabled: boolean, applyChanges: boolean) => void;
  style: {
    opacity: number;
  };
}

function ActionButtons(props: IProps) {
  const { style, note, onChangeEditMode, isEditModeEnabled } = props;
  const dispatch = useAppDispatch();

  const handleDeleteNote = () => {
    dispatch(deleteNote({ indexOfNoteToDelete: note.index }));
  };

  return (
    <div className={styles.actionButtons} style={style}>
      {isEditModeEnabled ? (
        <>
          <Button
            className={`${styles.actionButton} ${styles.actionConfirmButton}`}
            type="primary"
            icon={<CheckOutlined />}
            shape="circle"
            size="large"
            onClick={() => onChangeEditMode(false, true)}
          />

          <Button
            className={styles.actionButton}
            danger
            type="primary"
            icon={<CloseOutlined />}
            shape="circle"
            size="large"
            onClick={() => onChangeEditMode(false, false)}
          />
        </>
      ) : (
        <>
          <Button
            className={styles.actionButton}
            type="primary"
            icon={<EditOutlined />}
            shape="circle"
            size="large"
            onClick={() => onChangeEditMode(true, false)}
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
        </>
      )}
    </div>
  );
}

export default ActionButtons;
