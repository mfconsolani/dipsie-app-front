import React from 'react'
import { Card, Grid, Text } from '@geist-ui/react'
import './MainInfo.styles.css'
import { Spacer, Dot } from '@geist-ui/react'
import { Tool, User, Database, CheckCircle } from '@geist-ui/react-icons'


const MainInfo = ({ id, name, skills, availability, ...props }) => {
  return (
    <Grid style={{ display: "flex", margin: "1em" }}>
      <Card id="mainSkillsCard" shadow hoverable>
        <div>
          <span><Database size={20} color="#FF0080" /></span><Spacer inline x={.35} />
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
          <Text size="1.15rem" className="gradient-text" style={{ display: "inline" }} p b>Modulos de Expertise </Text>
          <Text size="1rem" p>{skills}</Text>
        </div>
        <div>
          <span><CheckCircle size={20} color="#FF0080" /></span><Spacer inline x={.35} />
          <Text size="1.15rem" className="gradient-text" style={{ display: "inline" }} p b>Dispo. Inmediata </Text>
          { availability
          ?<Text size="1rem" p><Dot style={{ marginRight: '20px' }} type="success">Si</Dot></Text>
          :<Text size="1rem" p><Dot style={{ marginRight: '20px' }} type="error">No</Dot></Text>
          }
          
           {/* <Text size="1rem" p>{availability ? "Si" : "No"}</Text> */}
        </div>
      </Card>
    </Grid>
  )
}

export default MainInfo