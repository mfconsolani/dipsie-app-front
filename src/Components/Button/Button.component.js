import './Button.styles.css'

const Button = ({ onClick, name, type }) => {

    return (
        <>
            {type ?
                <button type={type}>{name}</button>
                :
                <button onClick={onClick}>{name}</button>
            }
        </>
    )
}

export default Button;