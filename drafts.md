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

                {/* {errors.id && <span>{console.alert(errors.id.message)}</span>} */}



if (Object.keys(INPUT_FIELDS) === Object.keys(postDateSelected){
  INPUT_FIELDS.prop.value = postDateSelected[1]
}

Nombre de la empresa: 
CIF (registration number): 
Direccion de la empresa: 

Nombre completo del representate legal (la persona que firma en representación de la empresa)
Correo Electronico:
DNI:

Consultar contrato español o ingles?

Consultor:
Nombre: Lucas Patricio Milovich
Correo Electronico: lpmilovich@gmail.com
DNI: 30.277.712
Dirección/domicilio: Crisologo Larralde 4695, Saavedra, (1430), CABA Argentina 



Contrato en ingles o en español

Luego musurit te tiene que contratar como autonomo (relacion legal para que te puedan emitir los pagos)
Esto debe estar listo al 1ro de Septiembre - te lo van a pedir de cara a la primera facturacion


