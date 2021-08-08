import React from 'react'
import './Button.styles.css'
import { Button as GeistButton } from '@geist-ui/react'
// import { useAuth0 } from "@auth0/auth0-react";

const Button = (props) => {
    // const { isAuthenticated } = useAuth0();
    return (
        <div>
            {props.type ?
                <GeistButton {...props}
                    htmlType={props.type}
                    type="success"
                    id={props.id ? props.id : ""}
                    size={props.size ? props.size : "small"}
                >{props.name}</GeistButton>
                :
                <GeistButton
                    // {...(!isAuthenticated && {disabled: true} )}
                    onClick={props.onClick}
                    type="secondary"
                    id={props.id ? props.id : ""}
                    ghost auto>{props.name}</GeistButton>
                    
            }
        </div>
    )
}

export default Button;