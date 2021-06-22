import styles from "./NotFoundPage.less";

function NotFoundPage() {
  return (
    <div className={styles.error}>
      <h2>404</h2>
      <p>Sorry, the page you are looking for is not found :(</p>
      <a href="/u">To the main page</a>
    </div>
  );
}

export default NotFoundPage;
