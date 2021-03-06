import './InputField.component.css'

const InputField = ({id, name, value, onChange}) => {

    const handleInputChange = (event) => {
        onChange(event)
    }

    return (
        <div>
            <div>
                <label>{name}</label>
            </div>
            <input 
            id={id} 
            type="text" 
            name={name} 
            value={value}
            required 
            onChange={handleInputChange}/>
        </div>
    )
}


export default InputField