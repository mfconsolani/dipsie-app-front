import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Note, Grid } from "@geist-ui/react";

const UnauthorizedNote = () => {
  const { user, isLoading } = useAuth0();
  const userRole =
    user && user[`${process.env.REACT_APP_AUTH0_AUDIENCE}/roles`]
      ? user[`${process.env.REACT_APP_AUTH0_AUDIENCE}/roles`]
      : [];
  let unauthorized = userRole.length >= 1 ? false : true;
  const userCapitalized =
    user && user.nickname.charAt(0).toUpperCase() + user.nickname.slice(1);

  return (
    <React.Fragment>
      {!isLoading && unauthorized ? (
        <Grid style={{ display: "flex", margin: "1em" }}>
          <Note type="error">
            {`${user && userCapitalized}, 
              your access to Dipsie functionality is restricted. 
              To request further credentials to protected utilities,
               please contact`}{" "}
            <b>dipsiesupport@gmail.com</b>
          </Note>
        </Grid>
      ) : null}
    </React.Fragment>
  );
};

export default UnauthorizedNote;
