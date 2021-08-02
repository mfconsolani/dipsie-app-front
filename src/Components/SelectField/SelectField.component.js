import './SelectField.styles.css'

const SelectField = ({ onChange, candidate }) => {

    return (
        <select onChange={onChange}>
            {candidate.candidateInfo.map((element) => {
                return (
                <option key={element._id} value={element.postSavingDate}>
                    {element.postSavingDate}
                </option>)}
                )}
        </select>
    )
}

export default SelectField;