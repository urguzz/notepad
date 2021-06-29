import { useTranslation } from "react-i18next";

import LayoutFooter from "../../containers/LayoutFooter/LayoutFooter";

import styles from "./NotFoundPage.less";

function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <div className={styles.Wrapper}>
      <div className={styles.error}>
        <h2>404</h2>
        <p>{t("error.NotFoundMessage")}</p>
        <a href="/home">{t("error.ToTheMainPage")}</a>
      </div>
      <LayoutFooter />
    </div>
  );
}

export default NotFoundPage;
