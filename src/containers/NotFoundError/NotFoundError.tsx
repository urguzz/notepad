import styles from "./NotFoundError.less";

function NotFoundError() {
  return (
    <div className={styles.error}>
      <h2 className={styles.errorCode}>404</h2>
      <p className={styles.errorMessage}>
        Sorry, the page you are looking for is not found :(
      </p>
    </div>
  );
}

export default NotFoundError;
