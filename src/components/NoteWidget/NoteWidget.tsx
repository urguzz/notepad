import { useState } from "react";

import Note from "./NoteWidgetCard/Note/Note";
import NoteWidgetCard from "./NoteWidgetCard/NoteWidgetCard";
import ActionButtons from "./ActionButtons/ActionButtons";

import styles from "./NoteWidget.less";

interface IProps {
  note: Note;
}

function NoteWidget(props: IProps) {
  const [style, setStyle] = useState({ opacity: 0 });
  const [isEdited, setIsEdited] = useState(false);

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
      <NoteWidgetCard note={props.note} isEdited={isEdited} />
      <ActionButtons
        note={props.note}
        style={style}
        isEdited={isEdited}
        onEdit={setIsEdited}
      />
    </div>
  );
}

export default NoteWidget;
