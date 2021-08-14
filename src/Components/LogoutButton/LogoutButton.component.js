import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from '../index';

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <React.Fragment>
    <Button
      name="Log Out"
      className="reverse-classic"
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
      />
      </React.Fragment>
  );
};

export default LogoutButton;