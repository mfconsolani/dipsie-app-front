import Input from './Components/Input/Input.component';
// import { useState } from 'react'
import Switches from './Components/Switch/switch.component';



function App() {
  return (
    <div className="App">
      <form>
      <Input value="Candidate ID"/>
      <Input value="Full Name"/>
      <Switches
        name="true"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
        color="primary"
      />
      <Input value="Available Now"/>
      <Input value="Main Skills"/>
      </form>
    </div>
  );
}

export default App;
