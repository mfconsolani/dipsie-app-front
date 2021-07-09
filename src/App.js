import React from "react";
import { InputField, RadioField } from "./Components";
import { TextField } from "@material-ui/core";
import { useFormContext } from "./utils/hooks";
import "./App.css";
import axios from "axios";

function App() {
  const { formData, setFormData, handleInputChange, handleOnSubmit, handleRadioChange } =
    useFormContext();

  const [testValue, setTestValue] = React.useState("lala");

  // const [mockedFormData, setMockedFormData] = React.useState({});

  React.useEffect(() => {
    async function fetchApi() {
      try {
        const res = await axios.get(
          "https://mocki.io/v1/bec056f1-af25-4569-a6ab-fae356244182"
        );
        const { data } = res;
        setFormData(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchApi();
  }, [setFormData]);

  console.log(formData)
  return (
    <div className="App">
      <form onSubmit={handleOnSubmit}>
        {Object.entries(formData).map((entry) => {
          console.log(entry)
          if (entry[1].type === "text") {
            return (
              
              <TextField
                id={entry[0]}
                name={entry[1].name}
                label={entry[1].name}
                value={entry[0].value}
                onChange={handleInputChange}
                // onChange={(event) => setTestValue(event.target.value)}
              />
              // <TextField
              //   id={entry[0]}
              //   key={entry[0]}
              //   name={entry[1].name}
              //   value={entry[1].value}
              //   onChange={handleInputChange}
              // />
            );
          } else if (entry[1].type === "radio") {
            return (
              <RadioField
                id={entry[0]}
                key={entry[0]}
                titulo={entry[1].titulo}
                type={entry[1].type}
                name={entry[1].name}
                onChange={handleRadioChange}
              />
            );
          }
          return formData;
        })}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
