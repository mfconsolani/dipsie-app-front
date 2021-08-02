import './EntryForm.styles.css'
import {INPUT_FIELDS} from '../../variables'
import { TextField, RadioField } from "../index"


const EntryForm = ({ register, onSubmit }) => {

    function handleOnSubmit(event) {
        event.preventDefault()
        onSubmit()
    }

    return (
        <form onSubmit={handleOnSubmit}>
            {Object.entries(INPUT_FIELDS).map(entry => {
                if (entry[1].type === "text") {
                    return (
                        <TextField
                            key={entry[0]}
                            id={entry[0]}
                            name={entry[1].name}
                            value={entry[1].value}
                            register={register}
                        />
                    )
                } else {
                    return (
                        <RadioField
                            key={entry[0]}
                            titulo={entry[1].titulo}
                            name={entry[1].name}
                            type={entry[1].type}
                            register={register}
                        />
                    )
                }
            })
            }
            <button type="submit">Enviar</button>

        </form>
    )
}

export default EntryForm