import { AuthPage } from "@refinedev/antd";
import { AuthWrapper } from "../index";

export const Login: React.FC = () => {
  return (
    <AuthPage
      type="login"
      formProps={{
        initialValues: {
          email: "mortezegiti1990@gmail.com",
          password: "morteza@12345",
        },
      }}
      renderContent={(content) => <AuthWrapper>{content}</AuthWrapper>}
    />
  );
};
