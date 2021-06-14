import styles from "./ErrorPage.less";

function ErrorPage() {
  return (
    <div className={styles.error}>
      <h2 className={styles.errorMessage}>404</h2>
    </div>
  );
}

export default ErrorPage;
