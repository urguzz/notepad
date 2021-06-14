import { useState } from "react";

import { useAppDispatch } from "../../../store";
import { editNoteContent, editNoteTitle } from "../../../reducers/notes";
import Note from "./NoteWidgetCard/Note/Note";
import NoteWidgetCard from "./NoteWidgetCard/NoteWidgetCard";
import ActionButtons from "./ActionButtons/ActionButtons";

import styles from "./NoteWidget.less";

interface IProps {
  note: Note;
}

function NoteWidget(props: IProps) {
  const note = props.note;
  const dispatch = useAppDispatch();
  const [isActionButtonsVisible, setIsActionButtonsVisible] = useState(0);
  const [isEdited, setIsEdited] = useState(false);

  const handleMouseEnter = () => {
    setIsActionButtonsVisible(1);
  };

  const handleMouseLeave = () => {
    setIsActionButtonsVisible(0);
  };

  const handleTitleChange = (title: string) => {
    dispatch(
      editNoteTitle({
        newTitle: title,
        indexOfNoteToEdit: note.index,
      })
    );
  };

  const handleContentChange = (content: string) => {
    dispatch(
      editNoteContent({
        newContent: content,
        indexOfNoteToEdit: note.index,
      })
    );
  };

  return (
    <div
      className={styles.widget}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <NoteWidgetCard
        note={note}
        isEdited={isEdited}
        onEditTitle={handleTitleChange}
        onEditContent={handleContentChange}
      />
      <ActionButtons
        note={props.note}
        style={{ opacity: isActionButtonsVisible }}
        isEdited={isEdited}
        onEdit={setIsEdited}
      />
    </div>
  );
}

export default NoteWidget;
