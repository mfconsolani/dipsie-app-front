const flattenAttributes = (object) => {
    let customProps = {}
    Object.entries(object).map(values => {
      let newValue = {[values[0]]: values[1].value}
      return Object.assign(customProps, newValue) 
    })
    return customProps
  }

  export default flattenAttributes