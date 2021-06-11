import { Card } from "antd";

import Note from "./Note/Note";

import styles from "./NoteWidgetCard.less";

interface IProps {
  note: Note;
}

function NoteWidgetCard(props: IProps) {
  const { title, content } = props.note;
  return (
    <Card className={styles.card}>
      <div className="text-wrapper">
        <h2>{title}</h2>
        <hr />
        <p>{content}</p>
      </div>
    </Card>
  );
}

export default NoteWidgetCard;
