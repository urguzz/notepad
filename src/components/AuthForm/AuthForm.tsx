import { useTranslation } from "react-i18next";
import { Form, Input, Button } from "antd";

import UserCredentials from "../../api/interfaces/user/user";

import styles from "./AuthForm.less";

interface IProps {
  onFinish: (user: UserCredentials) => void;
  type: "signIn" | "signUp";
}

interface SignFormProps {
  submitButtonText: string;
}

function AuthForm(props: IProps) {
  const { onFinish, type } = props;
  const { t } = useTranslation();

  const handleOnFinish = (user: UserCredentials) => {
    onFinish(user);
  };

  const formPropsMap = new Map<string, SignFormProps>([
    [
      "signIn",
      {
        submitButtonText: t("auth.SignInButton"),
      },
    ],
    [
      "signUp",
      {
        submitButtonText: t("auth.SignUpButton"),
      },
    ],
  ]);
  const { submitButtonText } = formPropsMap.get(type)!;

  return (
    <Form name="auth" onFinish={handleOnFinish}>
      <Form.Item
        className={styles.FormItem}
        label={t("auth.EmailLabel")}
        name="email"
        rules={[{ required: true, message: t("auth.EmailInputWarning") }]}
      >
        <Input type="email" />
      </Form.Item>

      <Form.Item
        className={styles.FormItem}
        label={t("auth.PasswordLabel")}
        name="password"
        rules={[{ required: true, message: t("auth.PasswordInputWarning") }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className={styles.SubmitButton}
        >
          {submitButtonText}
        </Button>
      </Form.Item>
    </Form>
  );
}

export default AuthForm;
