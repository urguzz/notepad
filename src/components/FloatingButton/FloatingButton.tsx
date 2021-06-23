import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import styles from "./FloatingButton.less";

interface IProps {
  onClick: () => void;
}

function FloatingButton(props: IProps) {
  const { onClick } = props;

  return (
    <div className={styles.Wrapper}>
      <Button
        className={styles.FloatingButton}
        type="primary"
        icon={<PlusOutlined />}
        shape="circle"
        size="large"
        onClick={onClick}
      />
    </div>
  );
}

export default FloatingButton;
