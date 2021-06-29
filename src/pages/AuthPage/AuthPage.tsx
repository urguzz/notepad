import { Card, Tabs } from "antd";
import { useTranslation } from "react-i18next";

import { signIn, signUp } from "../../api/firebase/user.repository";
import UserCredentials from "../../api/interfaces/user/user";
import AuthForm from "../../components/AuthForm/AuthForm";

import styles from "./AuthPage.less";

function AuthPage() {
  const { t } = useTranslation();

  const handleOnSignIn = (user: UserCredentials) => {
    signIn(user);
  };
  const handleOnSignUp = (user: UserCredentials) => {
    signUp(user);
  };

  return (
    <div className={styles.Wrapper}>
      <Card className={styles.AuthCard}>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab={t("auth.SignIn")} key="1">
            <AuthForm type="signIn" onFinish={handleOnSignIn} />
          </Tabs.TabPane>
          <Tabs.TabPane tab={t("auth.SignUp")} key="2">
            <AuthForm type="signUp" onFinish={handleOnSignUp} />
          </Tabs.TabPane>
        </Tabs>
      </Card>
    </div>
  );
}

export default AuthPage;
