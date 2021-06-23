import { Form, Input, Button } from "antd";

import UserCredentials from "../../api/interfaces/user/user";

import styles from "./AuthForm.less";

interface IProps {
  onFinish: (user: UserCredentials) => void;
  type: "signIn" | "signUp";
}

interface SignFormProps {
  formLabel: string;
  submitButtonText: string;
}

function AuthForm(props: IProps) {
  const { onFinish, type } = props;

  const handleOnFinish = (user: UserCredentials) => {
    onFinish(user);
  };

  const formPropsMap = new Map<string, SignFormProps>([
    ["signIn", { formLabel: "Login", submitButtonText: "Sign In" }],
    ["signUp", { formLabel: "Register", submitButtonText: "Sign Up" }],
  ]);
  const { submitButtonText } = formPropsMap.get(type)!;

  return (
    <Form name="auth" onFinish={handleOnFinish}>
      <Form.Item
        className={styles.FormItem}
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input type="email" />
      </Form.Item>

      <Form.Item
        className={styles.FormItem}
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          {submitButtonText}
        </Button>
      </Form.Item>
    </Form>
  );
}

export default AuthForm;
