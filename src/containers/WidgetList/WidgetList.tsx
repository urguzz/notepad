import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Col, Row } from "antd";
import { Content } from "antd/lib/layout/layout";

import Note from "../../redux/api/Note/Note";
import { selectNotes } from "../../redux/selectors/notes";
import { useAppDispatch } from "../../redux/hooks/hooks";
import {
  deleteNote,
  editNote,
  startEditNote,
} from "../../redux/reducers/notes";
import NoteWidget from "../../components/NoteWidget/NoteWidget";

import styles from "./WidgetList.less";

function WidgetList() {
  const dispatch = useAppDispatch();
  const notesData = useSelector(selectNotes);
  const notes: Array<ReactNode> = [];

  const handleOnDelete = (noteId: number) => {
    dispatch(deleteNote({ idOfNoteToDelete: noteId }));
  };
  const handleOnStartEdit = (editedNoteId: number) => {
    dispatch(startEditNote({ idOfNoteToEdit: editedNoteId }));
  };
  const handleOnFinishEdit = (editedNote: Note) => {
    dispatch(editNote({ editedNote }));
  };

  notesData?.forEach((note) => {
    notes.push(
      <Col span={8} key={note.id} className={styles.widgetListCol}>
        <NoteWidget
          note={note}
          onDelete={handleOnDelete}
          onStartEdit={handleOnStartEdit}
          onFinishEdit={handleOnFinishEdit}
        />
      </Col>
    );
  });

  return (
    <Content className={styles.content}>
      <Row gutter={16} justify="space-around" className={styles.widgetListRow}>
        {notes}
      </Row>
    </Content>
  );
}

export default WidgetList;
