import React from 'react'
import styled from 'styled-components'

interface Props {
  header: string
  description: string
  liveUrl: string
  sourceUrl: string
  techs: string[]
}

const Project: React.FC<Props> = ({ header, description, techs, liveUrl, sourceUrl }) => {
  
const renderTech = () => techs.map(tech => <div key={tech}>{tech}</div>)
  
  return (
    <Container>
      <h3>{header}</h3>
      <p>{description}</p>
      <div>{renderTech()}</div>
      <a target="blank" href={sourceUrl}>Source code</a>
      {!liveUrl ? '' : <a target="blank" href={liveUrl}>Live version</a>}      
    </Container>
  )
}

const Container = styled.div`
  border: 1px solid black;
  margin: 5vh;
  display: flex;
  flex-direction: column;
  text-align: center;
`

export default Project