import React from 'react'
import { Card, Grid, Text } from '@geist-ui/react'
import './MainInfo.styles.css'
import { Spacer } from '@geist-ui/react'
import { Tool, User, Database } from '@geist-ui/react-icons'


const MainInfo = ({ id, name, skills }) => {
  return (
    <Grid style={{ display: "flex", margin: "1em" }}>
      <Card id="mainSkillsCard" shadow hoverable>
        <div>
          <span><Database size={20} color="#FF0080"/></span><Spacer inline x={.35} />
          <Text size="1.15rem" className="gradient-text" style={{ display: "inline" }} p b>ID </Text>
          <Text size="1rem" p>{id}</Text>
        </div>
        <div>
          <span><User size={20} color="FF0080" /></span><Spacer inline x={.35} />
          <Text size="1.15rem" className="gradient-text" style={{ display: "inline" }} p b>Nombre </Text>
          <Text size="1rem" p>{name}</Text>
        </div>
        <div>
          <span><Tool size={20} color="#FF0080" /></span><Spacer inline x={.35} />
          <Text size="1.15rem" className="gradient-text" style={{ display: "inline" }} p b>Main Skills </Text>
          <Text size="1rem" p>{skills}</Text>
        </div>
      </Card>
    </Grid>
  )
}

export default MainInfo