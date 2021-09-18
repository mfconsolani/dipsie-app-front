import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Note } from '@geist-ui/react'

const UnauthorizedNote = () => {
    const { user, isLoading } = useAuth0();
    const userRole = (user && user[`${process.env.REACT_APP_AUTH0_AUDIENCE}/roles`])
        ? user[`${process.env.REACT_APP_AUTH0_AUDIENCE}/roles`]
        : []
    let unauthorized = userRole.length >= 1 ? false : true

    return (
        <React.Fragment>
            {
                !isLoading && unauthorized
                    ?
                    <Note type="error">
                        You have not the required credentials to
                        access this section of the application.
                        To request credentials, please contact 
                        <b> dipsiesupport@gmail.com</b>
                    </Note>
                    : null
            }
        </React.Fragment>
    )
}

export default UnauthorizedNote