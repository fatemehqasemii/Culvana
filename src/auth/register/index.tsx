import { AuthPage } from "@refinedev/antd";
import { AuthWrapper } from "../auth-wrapper";

export const Register = () => {
  return (
    <AuthPage
      type="register"
      title=""
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
