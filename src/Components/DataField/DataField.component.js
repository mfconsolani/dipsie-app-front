import React from 'react'
import { INPUT_FIELDS } from "../../variables"
import "./DataField.styles.css"
import { Description, Grid, Card } from '@geist-ui/react'

const DataField = ({ entry }) => {

    return (entry 
        ? 
        <Card style={{margin: "1em", width: "auto"}} hoverable>
        <Grid.Container gap={1.5}>
        {Object
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
                    <Grid
                    key={element[0]}
                    style={{width: "30%"}} 
                    // justify="center" 
                    // alignItems="center"
                    xs={20} sm={12} md={8} 
                    >
                    <Description title={element[2]} content={element[1]}/>
                    </Grid>
                )
            })}
            </Grid.Container>
            </Card>
        : <p>No hay información disponible</p>)
}

export default DataField