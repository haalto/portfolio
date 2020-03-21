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
      <div>
        <div>{renderTech()}</div>
      </div>      
      <SourceButton target="blank" href={sourceUrl}>Source code</SourceButton>
      {!liveUrl ? '' : <LiveButton target="blank" href={liveUrl}>Live version</LiveButton>}      
    </Container>
  )
}

const Container = styled.div`
  border: 1px solid black;
  margin-bottom: 5vh;
  margin-top: 5vh;
  margin-left: 5vh; 
  margin-right: 5vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: rgb(250, 250, 250);
  align-items: center;
  border-radius: 10px;
  box-shadow: 1px 1px 1px black;
`

const SourceButton = styled.a`
  display: inline-block;
  border: none;
  color: white;
  background-color: #4CAF50;
  width: 50%;
  text-align: center;
  text-decoration: none;
  border-radius: 10px;
  margin-top: 2vh;
  margin-bottom: 3vh;  
`

const LiveButton = styled.a`
  display: inline-block;
  border: none;
  color: white;
  background-color: #4CAF50;
  width: 50%;
  text-align: center;
  text-decoration: none;
  border-radius: 10px;
  margin-bottom: 3vh;
`

export default Project