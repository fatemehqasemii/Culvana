import { AuthPage } from "@refinedev/antd";
import { AuthWrapper } from "../auth-wrapper";

export const ForgotPassword = () => {
  return (
    <AuthPage
      type="forgotPassword"
      title=""
      renderContent={(content) => (
        <AuthWrapper isShowGoogleButton={false}>{content}</AuthWrapper>
      )}
    />
  );
};
