import React from 'react'
import './Button.styles.css'

const Button = (props) => {
    return (
        <div>
            {props.type ?
                <button {...props}
                    disabled={props.disabled}
                    type={props.type}
                    id={props.id ? props.id : ""}
                    className={props.className ? props.className : ""}
                >{props.name}</button>
                :
                <button
                    disabled={props.disabled}
                    onClick={props.onClick}
                    id={props.id ? props.id : ""}
                    className={props.className ? props.className : ""}
                    >{props.name}</button>                    
            }
        </div>
    )
}

export default Button;