import { useTranslation } from "react-i18next";

import styles from "./HomeContainer.less";

function HomeContainer() {
  const { t } = useTranslation();

  return (
    <div className={styles.Wrapper}>
      <h2>{t("home.Welcome")}</h2>
    </div>
  );
}

export default HomeContainer;
