import React from 'react'
import './EntryForm.styles.css'
import {INPUT_FIELDS} from '../../variables'
import { TextField, RadioField } from "../index"
import { Grid, Card } from '@geist-ui/react'
import { Button } from '../index'


const EntryForm = ({ register, onSubmit }) => {

    function handleOnSubmit(event) {
        event.preventDefault()
        onSubmit()
    }

    return (
      <Card shadow hoverable>
        <form onSubmit={handleOnSubmit} autoComplete="off" >
            <Grid.Container className="mainContainer" gap={0.5} justify="center">
            {Object.entries(INPUT_FIELDS).map(entry => {
                if (entry[1].type === "text") {

                    return (
                        <Grid xs={20} sm={12} md={8} justify="center" key={entry[0]}>
                        <TextField
                            id={entry[0]}
                            name={entry[1].name}
                            value={entry[1].value}
                            register={register}
                        />
                        </Grid>
                    )
                } else {
                    return (
                        <Grid xs={20} sm={12} md={8} justify="center" key={entry[0]}>
                        <RadioField
                            titulo={entry[1].titulo}
                            name={entry[1].name}
                            type={entry[1].type}
                            register={register}
                        />
                        </Grid>
                    )
                }
            })}
            <Grid xs={20} sm={12} md={8} justify="center" alignItems="center">
            <Button className="all-reverse" type="submit" name="Enviar" size="medium"/>
            </Grid>
            </Grid.Container>

        </form>
      </Card>

    )
}

export default EntryForm