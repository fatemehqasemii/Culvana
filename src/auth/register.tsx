import { AuthPage } from "@refinedev/antd";
import { Col, Divider, Row } from "antd";
import { useEffect, useRef } from "react";
import { CredentialResponse } from "../interfaces/google";
import { useLogin } from "@refinedev/core";

export const Register = () => {
  const GOOGLE_CLIENT_ID =
    "154978617833-ub5cbblms48kvganj002seit10r4fsg2.apps.googleusercontent.com";
  const GoogleButton = (): JSX.Element => {
    const divRef = useRef<HTMLDivElement>(null);
    const { mutate: login } = useLogin<CredentialResponse>();

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
      type="register"
      title=""
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
