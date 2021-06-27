import { TextField } from '@material-ui/core';
import './input.component.css'
import Box from '@material-ui/core/Box';

const Input = (props) => {

    return (
        <div>
            <Box m={2}>
                <TextField required
                    // id="outlined-required"
                    label={props.name}
                    defaultValue=""
                    variant="outlined"
                />
            </Box>
        </div>
    )
}


export default Input