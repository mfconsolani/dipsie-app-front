import { INPUT_FIELDS } from "../../variables"
import "./DataField.styles.css"

const DataField = ({ entry }) => {

    return (entry 
        ? Object
            .entries(entry)
            .filter(element => element[0] !== "_id")
            .map(element => {
                Object.entries(INPUT_FIELDS).map(values => {
                    if (values[0] === element[0]) {
                        element[2] = values[1].name
                    } else if (element[0] === "postSavingDate") {
                        element[2] = "Info guardada"
                    }
                    return values[1].name
                })
                return (
                    <div key={element[0]}>
                        <span>{element[2]}: </span>
                        <span>{element[1]}</span>
                    </div>
                )
            })
        : <p>No hay información disponible</p>)
}

export default DataField