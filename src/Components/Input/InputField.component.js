import './InputField.component.css'

const InputField = ({id, name, value, onChange, register}) => {

    const handleInputChange = (event) => {
        onChange(event)
    }

    return (
        <div className="input-parent-div">
            <div>
                <label>{name}</label>
            </div>
            <input {...register(name, {
                id:{id}, 
                type:"text", 
                value:{value}, 
                onChange:{handleInputChange}})}/>
        </div>
    )
}


export default InputField