import { useEffect, useState } from "react";

import { useAppDispatch } from "../../../store";
import { editNote } from "../../../reducers/notes";
import Note from "./NoteWidgetCard/Note/Note";
import NoteWidgetCard from "./NoteWidgetCard/NoteWidgetCard";
import ActionButtons from "./ActionButtons/ActionButtons";

import styles from "./NoteWidget.less";

interface IProps {
  note: Note;
}

function NoteWidget(props: IProps) {
  const dispatch = useAppDispatch();
  const [isActionButtonsVisible, setIsActionButtonsVisible] = useState(0);
  const [isEditModeEnabled, setIsEditModeEnabled] = useState(false);
  const [note, setNote] = useState(props.note);

  useEffect(() => {
    setNote(props.note);
  }, [props.note]);

  const handleMouseEnter = () => {
    setIsActionButtonsVisible(1);
  };

  const handleMouseLeave = () => {
    setIsActionButtonsVisible(0);
  };

  const handleOnChangeEditMode = (
    editModeEnabled: boolean,
    applyChanges: boolean
  ) => {
    setIsEditModeEnabled(editModeEnabled);
    if (applyChanges) {
      dispatch(
        editNote({
          editedNote: note,
          indexOfNoteToEdit: note.index,
        })
      );
    } else {
      setNote(props.note);
    }
  };

  const handleEditNote = (note: Note) => {
    setNote(note);
  };

  return (
    <div
      className={styles.widget}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <NoteWidgetCard
        note={note}
        isEditModeEnabled={isEditModeEnabled}
        onEditNote={handleEditNote}
      />
      <ActionButtons
        note={props.note}
        style={{ opacity: isActionButtonsVisible }}
        isEditModeEnabled={isEditModeEnabled}
        onChangeEditMode={handleOnChangeEditMode}
      />
    </div>
  );
}

export default NoteWidget;
