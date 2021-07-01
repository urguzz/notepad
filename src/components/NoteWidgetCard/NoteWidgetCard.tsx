import React from "react";
import { Card, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";

import Note from "../../api/interfaces/note/note";

import styles from "./NoteWidgetCard.less";

interface IProps {
  onEditNote: (editedNote: Note) => void;
  note: Note;
  isEditModeEnabled: boolean;
}

function NoteWidgetCard(props: IProps) {
  const { note, isEditModeEnabled, onEditNote } = props;
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

  return isEditModeEnabled ? (
    <Card className={`${styles.card} ${styles.cardEdited}`}>
      <Input defaultValue={title} onChange={handleOnChangeTitle} />
      <hr />
      <TextArea
        defaultValue={content}
        onChange={handleOnChangeContent}
        rows={6}
        autoSize={true}
      />
    </Card>
  ) : (
    <Card className={styles.card}>
      <p>{title}</p>
      <hr />
      <p>{content}</p>
    </Card>
  );
}
export default NoteWidgetCard;
