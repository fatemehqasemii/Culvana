import { useLogin } from "@refinedev/core";
import { useEffect, useRef } from "react";
import { AuthPage } from "@refinedev/antd";
import { Col, Divider, Row } from "antd";
import { CredentialResponse } from "../interfaces/google";

const GOOGLE_CLIENT_ID =
  "154978617833-ub5cbblms48kvganj002seit10r4fsg2.apps.googleusercontent.com";

export const Login: React.FC = () => {
  const { mutate: login } = useLogin<CredentialResponse>();

  const GoogleButton = (): JSX.Element => {
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (typeof window === "undefined" || !window.google || !divRef.current) {
        return;
      }

      try {
        window.google.accounts.id.initialize({
          ux_mode: "popup",
          client_id: GOOGLE_CLIENT_ID,
          callback: async (res: CredentialResponse) => {
            if (res.credential) {
              login(res);
            }
          },
        });

        window.google.accounts.id.renderButton(divRef.current, {
          theme: "outline",
          size: "medium",
          type: "standard",
        });
      } catch (error) {
        console.log(error);
      }
    }, []);

    return <div ref={divRef} />;
  };

  return (
    <AuthPage
      type="login"
      formProps={{
        initialValues: {
          email: "mortezegiti1990@gmail.com",
          password: "morteza@12345",
        },
      }}
      renderContent={(content) => (
        <Row style={{ height: "100vh" }}>
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={12}
            xl={12}
            style={{
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              padding: "20px",
            }}
          >
            <img
              src={"/assets/culvana.svg"}
              alt="Culvana"
              style={{ width: "150px", marginBottom: "60px" }}
            />

            {content}
            <Divider plain>or</Divider>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <GoogleButton />
            </Col>
          </Col>
          <Col
            xs={0}
            sm={0}
            md={12}
            lg={12}
            xl={12}
            style={{
              height: "100vh",
              overflow: "hidden",
            }}
          >
            <img
              src={"/assets/images/login.jpeg"}
              alt="Login Image"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Col>
        </Row>
      )}
    />
  );
};
