import { useEffect, useState } from "react";

import Note from "../../api/interfaces/note/note";
import NoteWidgetCard from "../NoteWidgetCard/NoteWidgetCard";
import ActionButtons from "../ActionButtons/ActionButtons";

import styles from "./NoteWidget.less";

interface IProps {
  note: Note;
  isBeingEdited: boolean;
  onDelete: (noteId: number) => void;
  onStartEdit: (editedNoteId: number) => void;
  onFinishEdit: (editedNote: Note) => void;
  onCancelEdit: () => void;
}

function NoteWidget(props: IProps) {
  const {
    note,
    isBeingEdited,
    onDelete,
    onFinishEdit,
    onStartEdit,
    onCancelEdit,
  } = props;
  const [isActionButtonsVisible, setIsActionButtonsVisible] = useState(false);
  const [editedNote, setEditedNote] = useState(props.note);

  useEffect(() => {
    setEditedNote(note);
  }, [note, isBeingEdited]);

  //action button opacity
  const handleMouseEnter = () => {
    setIsActionButtonsVisible(true);
  };
  const handleMouseLeave = () => {
    setIsActionButtonsVisible(false);
  };

  //note widget handlers
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
      onCancelEdit();
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
        isEditModeEnabled={isBeingEdited}
        onEditNote={handleEditNote}
      />
      <ActionButtons
        isVisible={isActionButtonsVisible}
        isEditModeEnabled={isBeingEdited}
        onDelete={handleOnDelete}
        onFinishEdit={handleOnFinishEdit}
        onStartEdit={handleOnStartEdit}
      />
    </div>
  );
}

export default NoteWidget;
