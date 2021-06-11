import { useState } from "react";

import Note from "./NoteWidgetCard/Note/Note";
import NoteWidgetCard from "./NoteWidgetCard/NoteWidgetCard";
import ActionButtons from "./ActionButtons/ActionButtons";

import styles from "./NoteWidget.less";

interface IProps {
  note: Note;
  noteId: number;
}
function NoteWidget(props: IProps) {
  const { note, noteId } = props;
  const [style, setStyle] = useState({ opacity: 0 });

  const handleMouseEnter = () => {
    setStyle({ opacity: 1 });
  };

  const handleMouseLeave = () => {
    setStyle({ opacity: 0 });
  };

  return (
    <div
      className={styles.widget}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <NoteWidgetCard note={note} />
      <ActionButtons noteId={noteId} style={style} />
    </div>
  );
}

export default NoteWidget;
