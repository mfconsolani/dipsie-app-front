import Input from './Components/Input/Input.component';
// import Switches from './Components/Switch/switch.component';

      <Input value="Candidate ID"/>
      <Input value="Full Name"/>
      {/* <Switches
        name="true"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
        color="primary"
      /> */}
      <Input value="Available Now"/>
      <Input value="Main Skills"/>


        useEffect(() => {
    axios.get('http://localhost:8080/interview/inputFields')
    .then(res => {
      // console.log(res.data)
      let { subFields, mainFields } = res.data
      console.log(res.data)
      console.log(subFields, mainFields)
      mainFields = mainFields.reduce((accum, currentValue) => {
        return {
          ...accum,
          [currentValue]: ""
        }
      }, "")
      subFields = subFields.reduce((accum, currentValue) => {
        return {
          ...accum,
          [currentValue]: ""
        }
      }, "")
      console.log(mainFields)
      console.log(subFields)
      setFormData(mainFields)
      return
    })
    .catch(err => console.log(err))
    return 
  }, [])