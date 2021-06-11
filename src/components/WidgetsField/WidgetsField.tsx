import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Col, Row } from "antd";

import { selectNotes } from "../../selectors/notes";
import NoteWidget from "../NoteWidget/NoteWidget";

import styles from "./WidgetsField.less";

function WidgetList() {
  const notesData = useSelector(selectNotes);
  const notes: Array<ReactNode> = [];
  notesData?.forEach((note, index) => {
    notes.push(
      <Col span={8} key={index} className={styles.widgetListCol}>
        <NoteWidget note={note} noteId={index} />
      </Col>
    );
  });
  return (
    <Row gutter={16} justify="space-around" className={styles.widgetListRow}>
      {notes}
    </Row>
  );
}

export default WidgetList;
