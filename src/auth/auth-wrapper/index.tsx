import { Col, Divider, Row } from "antd";
import { useEffect, useRef } from "react";
import { CredentialResponse } from "../../interfaces/google";
import { useLogin } from "@refinedev/core";
import { AuthWrapperProps } from "../auth.types";

const GOOGLE_CLIENT_ID =
  "154978617833-ub5cbblms48kvganj002seit10r4fsg2.apps.googleusercontent.com";

export const AuthWrapper = ({
  children,
  isShowGoogleButton = true,
}: AuthWrapperProps) => {
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
          width: "300px",
        });
      } catch (error) {
        console.log(error);
      }
    }, []);

    return <div ref={divRef} />;
  };
  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{}}>
        <img
          src={"/assets/icons/culvana.svg"}
          alt="Culvana"
          style={{
            display: "block",
            margin: "0 auto",
            paddingBottom: "20px",
          }}
        />
        {children}
        {isShowGoogleButton && (
          <>
            <Divider orientation="center">or</Divider>
            <GoogleButton />
          </>
        )}
      </Col>
      <Col xs={0} sm={0} md={12} lg={12} xl={12}>
        <img
          src={"/assets/images/login.jpeg"}
          alt="Login Image"
          style={{
            width: "100%",
            height: "100%",
            maxHeight: "100dvh",
            objectFit: "cover",
            display: "block",
          }}
        />
      </Col>
    </Row>
  );
};
