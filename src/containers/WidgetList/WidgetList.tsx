import { ReactNode, useState } from "react";
import { Col, Row } from "antd";
import { Content } from "antd/lib/layout/layout";

import Note from "../../api/interfaces/note/note";
import { updateNote } from "../../api/firebase/notes.repository";
import NoteWidget from "../../components/NoteWidget/NoteWidget";

import styles from "./WidgetList.less";

interface IProps {
  notes: Note[];
  onDelete: (noteId: number) => void;
  onEdit: (editedNote: Note) => void;
}

function WidgetList(props: IProps) {
  const [editedNoteId, setEditedNoteId] = useState(-1);
  const { notes, onDelete } = props;
  const noteWidgets: Array<ReactNode> = [];

  const handleOnStartEdit = (editedNoteId: number) => {
    setEditedNoteId(editedNoteId);
  };
  const handleOnFinishEdit = (editedNote: Note) => {
    setEditedNoteId(-1);
    updateNote(editedNote);
  };
  const handleOnCancelEdit = () => {
    setEditedNoteId(-1);
  };

  notes?.forEach((note) => {
    noteWidgets.push(
      <Col span={8} key={note.id} className={styles.widgetListCol}>
        <NoteWidget
          note={note}
          isBeingEdited={editedNoteId === note.id ? true : false}
          onDelete={onDelete}
          onStartEdit={handleOnStartEdit}
          onFinishEdit={handleOnFinishEdit}
          onCancelEdit={handleOnCancelEdit}
        />
      </Col>
    );
  });

  return (
    <Content>
      <Row gutter={16} justify="space-around" className={styles.widgetListRow}>
        {noteWidgets}
      </Row>
    </Content>
  );
}

export default WidgetList;
