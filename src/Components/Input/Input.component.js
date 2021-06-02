import { TextField } from '@material-ui/core';
import './input.component.css'


const Input = (props) => {
    return (
        <div>
            <TextField required
                id="outlined-required"
                label={props.value}
                defaultValue=""
                variant="outlined" 
            />
        </div>
    )
}


export default Input