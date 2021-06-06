import Switch from '@material-ui/core/Switch';
import { useState } from 'react';

export default function Switches(props) {
    
    const [state, setState] = useState({
      checkedA: false
    });
  
    const handleChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <div>
        <Switch
            checked={state.checkedA}
            onChange={handleChange}
            name="checkedA"
            color={props.color}
            inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        </div>
    )
}