import './input.component.css'

const InputField = ({name, value, onChange}) => {

    const handleInputChange = (event) => {
        onChange(event)
    }

    return (
        <div>
            <div>
                <label>{name}</label>
            </div>
            <input type="text" name={name} value={value} onChange={handleInputChange}/>
        </div>
    )
}


export default InputField