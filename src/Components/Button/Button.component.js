import React from 'react'
import './Button.styles.css'
import { Button as GeistButton } from '@geist-ui/react'

const Button = (props) => {

    return (
        <div>
            {props.type ?
                <GeistButton {...props} 
                htmlType={props.type} 
                type="success" 
                size={props.size ? props.size : "small"}
                >{props.name}</GeistButton>
                :
                <GeistButton 
                onClick={props.onClick} 
                type="secondary" 
                ghost auto>{props.name}</GeistButton>
            }
        </div>
    )
}

export default Button;