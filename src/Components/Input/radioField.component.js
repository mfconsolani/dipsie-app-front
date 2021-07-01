    
const RadioInput = ({titulo, type, name, onChange}) => {
    return (
    <div>
      <p>{titulo}</p>
      <div>
        <input 
        type={type} 
        id={name + "Si"} 
        name={name} 
        value="true"/>
        <label htmlFor="refSi">Si</label>
      </div>
    
      <div>
        <input 
        type={type} 
        id={name + "No"} 
        name={name} 
        value="false"
        defaultChecked/>
        <label htmlFor={name + "No"}>No</label>
      </div>
    </div>
    )
}    

export default RadioInput;