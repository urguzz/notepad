import { Card, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React from "react";

import Note from "./Note/Note";

import styles from "./NoteWidgetCard.less";

interface IProps {
  onEditNote: (editedNote: Note) => void;
  note: Note;
  isEditModeEnabled: boolean;
}

function NoteWidgetCard(props: IProps) {
  const { note, isEditModeEnabled: isEdited, onEditNote } = props;
  const { title, content } = note;

  const handleOnChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      onEditNote({ ...note, title: event.target.value });
    }
  };

  const handleOnChangeContent = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (event.target.value) {
      onEditNote({ ...note, content: event.target.value });
    }
  };

  return isEdited ? (
    <Card className={`${styles.card} ${styles.cardEdited}`}>
      <div className="text-wrapper">
        <Input defaultValue={title} onChange={handleOnChangeTitle} />
        <hr />
        <TextArea
          defaultValue={content}
          onChange={handleOnChangeContent}
          rows={6}
          autoSize={true}
        />
      </div>
    </Card>
  ) : (
    <Card className={styles.card}>
      <div className="text-wrapper">
        <p>{title}</p>
        <hr />
        <p>{content}</p>
      </div>
    </Card>
  );
}
export default NoteWidgetCard;
