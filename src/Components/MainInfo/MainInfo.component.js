import React from 'react'
import './MainInfo.styles.css'
import { Card, Grid, Text } from '@geist-ui/react'

const MainInfo = ({id, name, skills}) => {
    return(
      <Grid>
      <Card className="mainSkillsContainer" hoverable>
          <div>
            <Text p b>ID: </Text><Text p>{id}</Text>
          </div>
          <div>
          <Text p b>Name: </Text><span>{name}</span>
          </div>
          <div>
            <Text p b>Main Skills: </Text><span>{skills}</span>
          </div>
        </Card>
        </Grid>
    )
}

export default MainInfo