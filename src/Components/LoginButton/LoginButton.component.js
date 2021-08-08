import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from '../index';
import './LoginButon.styles.css'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <React.Fragment>
    <Button
      name="Log In"
      id="allReversed"
      onClick={() => loginWithRedirect()}
    />
    </React.Fragment>
  );
};

export default LoginButton;