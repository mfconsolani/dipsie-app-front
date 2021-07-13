import React from 'react'
// import {InputField, RadioField} from './Components';
// import { useFormContext } from './utils/hooks'
import { useForm } from 'react-hook-form';
import './App.css'
import { INPUT_FIELDS } from './variables.js';

const InputField = ({id, name, value, register}) => {

  return (
      <div className="input-parent-div">
          <div>
              <label>{name}</label>
          </div>
          <input {...register(id, {
              id:id, 
              type:"text",
              value:value,
              required: {value: true, message: "Campo requerido"}})}/>
      </div>
  )
}

function App() {

  const {
    register,
    handleSubmit,
    reset,
    formState
  } = useForm();
  const onSubmit = data => console.log(data);
  
  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
      { Object.entries(INPUT_FIELDS).map(entry => {
        if (entry[1].type === "text"){
          return (
            <div key={entry[0]}>
            <InputField
            id={entry[0]} 
            name={entry[1].name} 
            value={entry[1].value} 
            register={register}/>
            {/* {errors.id && <span>{console.alert(errors.id.message)}</span>} */}
            </div>
            )
        } else {
          return <p key={entry[0]}>Imposible to render</p>
        }
          })
        }
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
