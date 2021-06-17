import { useEffect, useState } from "react";

import Note from "../../redux/api/Note/Note";
import NoteWidgetCard from "../NoteWidgetCard/NoteWidgetCard";
import ActionButtons from "../ActionButtons/ActionButtons";

import styles from "./NoteWidget.less";

interface IProps {
  note: Note;
  onDelete: (noteId: number) => void;
  onStartEdit: (editedNoteId: number) => void;
  onFinishEdit: (editedNote: Note) => void;
}

function NoteWidget(props: IProps) {
  const [isActionButtonsVisible, setIsActionButtonsVisible] = useState(false);
  const [editedNote, setEditedNote] = useState(props.note);
  const { note, onDelete, onFinishEdit, onStartEdit } = props;

  useEffect(() => {
    setEditedNote(note);
  }, [note]);

  const handleMouseEnter = () => {
    setIsActionButtonsVisible(true);
  };
  const handleMouseLeave = () => {
    setIsActionButtonsVisible(false);
  };

  //widget handlers
  const handleEditNote = (editedNote: Note) => {
    setEditedNote(editedNote);
  };

  //action panel handlers
  const handleOnDelete = () => {
    onDelete(note.id);
  };
  const handleOnFinishEdit = (applyChanges: boolean) => {
    if (applyChanges) {
      onFinishEdit(editedNote);
    } else {
      onFinishEdit(note);
    }
  };
  const handleOnStartEdit = () => {
    onStartEdit(note.id);
  };

  return (
    <div
      className={styles.widget}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <NoteWidgetCard
        note={editedNote}
        isEditModeEnabled={note.isBeingEdited}
        onEditNote={handleEditNote}
      />
      <ActionButtons
        isVisible={isActionButtonsVisible}
        isEditModeEnabled={note.isBeingEdited}
        onDelete={handleOnDelete}
        onFinishEdit={handleOnFinishEdit}
        onStartEdit={handleOnStartEdit}
      />
    </div>
  );
}

export default NoteWidget;
