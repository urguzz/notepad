import styles from "./ErrorPage.less";

function ErrorPage() {
  return (
    <div className={styles.error}>
      <h2 className={styles.errorCode}>404 :(</h2>
      <p className={styles.errorMessage}>Sorry, the page you are looking for is not found</p>
    </div>
  );
}

export default ErrorPage;
