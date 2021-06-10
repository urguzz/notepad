import { Button, Card } from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";

import Note from "./Note/Note";

import styles from "./NoteWidget.less";
import { useState } from "react";

interface IProps {
  note: Note;
}
function NoteWidget(props: IProps) {
  const { title, content } = props.note;
  const [style, setStyle] = useState({ opacity: 0 });

  return (
    <div
      className={styles.widget}
      onMouseEnter={() => {
        setStyle({ opacity: 1 });
      }}
      onMouseLeave={() => {
        setStyle({ opacity: 0 });
      }}
    >
      <Card className={styles.card}>
        <div className="text-wrapper">
          <h2>{title}</h2>
          <hr />
          <p>{content}</p>
        </div>
      </Card>
      <div className={styles.actionButtons} style={style}>
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
    </div>
  );
}

export default NoteWidget;
