import React from 'react'
import './Button.styles.css'

const Button = (props) => {
    return (
        <div>
            {props.type ?
                <button {...props}
                    type={props.type}
                    id={props.id ? props.id : ""}
                    className={props.className ? props.className : ""}
                    // size={props.size ? props.size : "small"}
                >{props.name}</button>
                :
                <button
                    // {...(!isAuthenticated && {disabled: true} )}
                    onClick={props.onClick}
                    id={props.id ? props.id : ""}
                    // ghost auto
                    className={props.className ? props.className : ""}
                    >{props.name}</button>
                    
            }
        </div>
    )
}

export default Button;