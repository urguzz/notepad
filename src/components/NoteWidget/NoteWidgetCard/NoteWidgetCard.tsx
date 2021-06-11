import { Card, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React from "react";
import { editNoteContent, editNoteTitle } from "../../../reducers/notes";
import { useAppDispatch } from "../../../store";

import Note from "./Note/Note";

import styles from "./NoteWidgetCard.less";

interface IProps {
  note: Note;
  isEdited: boolean;
}

function NoteWidgetCard(props: IProps) {
  const dispatch = useAppDispatch();
  const { note, isEdited } = props;
  const { title, content } = note;

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const title = event.target.value;
    if (title) {
      dispatch(
        editNoteTitle({
          newTitle: event.target.value,
          indexOfNoteToEdit: note.index,
        })
      );
    }
  };

  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const content = event.target.value;
    if (content) {
      dispatch(
        editNoteContent({
          newContent: event.target.value,
          indexOfNoteToEdit: note.index,
        })
      );
    }
  };

  return (
    <Card className={styles.card}>
      <div className="text-wrapper">
        {isEdited ? (
          <Input defaultValue={title} onChange={handleTitleChange} />
        ) : (
          <p>{title}</p>
        )}
        <hr />
        {isEdited ? (
          <TextArea defaultValue={content} onChange={handleContentChange} />
        ) : (
          <p>{content}</p>
        )}
      </div>
    </Card>
  );
}

export default NoteWidgetCard;
