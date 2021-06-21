import { Button } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import classNames from "classnames";

import styles from "./ActionButtons.less";

interface IProps {
  isVisible: boolean;
  isEditModeEnabled: boolean;
  onStartEdit: () => void;
  onFinishEdit: (applyChanges: boolean) => void;
  onDelete: () => void;
}

function ActionButtons(props: IProps) {
  const { isEditModeEnabled, isVisible, onDelete, onFinishEdit, onStartEdit } =
    props;

  const confirmButtonClassName = classNames(
    styles.actionButton,
    styles.actionConfirmButton
  );
  const hiddenActionButtonsClassName = classNames(
    styles.ActionButtons,
    styles.HiddenActionButtons
  );

  const onClickDeleteButton = () => {
    onDelete();
  };
  const onClickCancelButton = () => {
    onFinishEdit(false);
  };
  const onClickConfirmButton = () => {
    onFinishEdit(true);
  };
  const onClickEditButton = () => {
    onStartEdit();
  };

  return (
    <div
      className={
        isVisible ? styles.ActionButtons : hiddenActionButtonsClassName
      }
    >
      {isEditModeEnabled ? (
        <>
          <Button
            className={confirmButtonClassName}
            type="primary"
            icon={<CheckOutlined />}
            shape="circle"
            size="large"
            onClick={onClickConfirmButton}
          />

          <Button
            className={styles.actionButton}
            danger
            type="primary"
            icon={<CloseOutlined />}
            shape="circle"
            size="large"
            onClick={onClickCancelButton}
          />
        </>
      ) : (
        <>
          <Button
            className={styles.actionButton}
            type="primary"
            icon={<EditOutlined />}
            shape="circle"
            size="large"
            onClick={onClickEditButton}
          />
          <Button
            className={styles.actionButton}
            danger
            type="primary"
            icon={<DeleteOutlined />}
            shape="circle"
            size="large"
            onClick={onClickDeleteButton}
          />
        </>
      )}
    </div>
  );
}

export default ActionButtons;
