import { ReactNode, useState } from "react";
import { ListManager } from "react-beautiful-dnd-grid";
import { Col, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import Note from "../../api/interfaces/note/note";
import NoteWidget from "../../components/NoteWidget/NoteWidget";
import FloatingButton from "../../components/FloatingButton/FloatingButton";

import styles from "./NotesContainer.less";

interface IProps {
  notes: Note[];
  onAdd: () => void;
  onDelete: (noteId: number) => void;
  onEdit: (editedNote: Note) => void;
}

function NotesContainer(props: IProps) {
  const [editedNoteId, setEditedNoteId] = useState(-1);
  const { notes, onDelete, onAdd, onEdit } = props;
  const noteWidgets: Array<ReactNode> = [];

  const handleOnStartEdit = (editedNoteId: number) => {
    setEditedNoteId(editedNoteId);
  };
  const handleOnFinishEdit = (editedNote: Note) => {
    setEditedNoteId(-1);
    onEdit(editedNote);
  };
  const handleOnCancelEdit = () => {
    setEditedNoteId(-1);
  };
  const handleOnDragEnd = () => {};

  notes?.forEach((note, index) => {
    noteWidgets.push(
      <div className={styles.GridItem}>
        <NoteWidget
          key={note.id}
          note={note}
          isBeingEdited={editedNoteId === note.id ? true : false}
          onDelete={onDelete}
          onStartEdit={handleOnStartEdit}
          onFinishEdit={handleOnFinishEdit}
          onCancelEdit={handleOnCancelEdit}
        />
      </div>
    );
  });

  return (
    <Content>
      <div className={styles.Grid}>
        <ListManager
          items={notes}
          direction="horizontal"
          maxItems={3}
          render={(note) => (
            <div className={styles.GridItem}>
              <NoteWidget
                key={note.id}
                note={note}
                isBeingEdited={editedNoteId === note.id ? true : false}
                onDelete={onDelete}
                onStartEdit={handleOnStartEdit}
                onFinishEdit={handleOnFinishEdit}
                onCancelEdit={handleOnCancelEdit}
              />
            </div>
          )}
          onDragEnd={handleOnDragEnd}
        />
      </div>
      <FloatingButton onClick={onAdd} />
    </Content>
  );
}

export default NotesContainer;
