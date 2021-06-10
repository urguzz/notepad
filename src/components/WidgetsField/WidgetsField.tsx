import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Col, Row } from "antd";

import { selectNotes } from "../../selectors/notes";

import styles from "./WidgetsField.less";
import NoteWidget from "../NoteWidget/NoteWidget";

function WidgetList() {
  const notesData = useSelector(selectNotes);
  const notes: Array<ReactNode> = [];
  notesData?.forEach((note, index) => {
    notes.push(
      <Col span={8} key={index} className={styles.widget}>
        <NoteWidget note={note} />
      </Col>
    );
  });
  return (
    <Row gutter={16} justify="space-around" className={styles.widgetList}>
      {notes}
    </Row>
  );
}

export default WidgetList;
