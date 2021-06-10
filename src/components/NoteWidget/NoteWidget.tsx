import { Button, Card } from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";

import Note from "./Note/Note";

import styles from "./NoteWidget.less";

interface IProps {
  note: Note;
}

function NoteWidget(props: IProps) {
  const { title, content } = props.note;
  return (
    <>
      <Card className={styles.card}>
        <div className="text-wrapper">
          <h2>{title}</h2>
          <hr />
          <p>{content}</p>
        </div>
      </Card>
      <div className={styles.actionButtons}>
        <Button
          className={styles.actionButton}
          type="primary"
          icon={<PlusOutlined />}
          shape="circle"
          size="large"
        />
        <Button
          className={styles.actionButton}
          danger
          type="primary"
          icon={<DeleteOutlined />}
          shape="circle"
          size="large"
        />
      </div>
    </>
  );
}

export default NoteWidget;
