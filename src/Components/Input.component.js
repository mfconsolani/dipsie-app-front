import { TextField } from '@material-ui/core';

const Input = (props) => {
    return (
        <div>
            <TextField required
                id="outlined-required"
                label="Candidate ID"
                // defaultValue="Hello World"
                variant="outlined" 
            />
        </div>
    )
}


export default Input