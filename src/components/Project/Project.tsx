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
      {!liveUrl ? '' : <LiveButton target="blank" href={liveUrl}>Live version</LiveButton>} 
      <SourceButton target="blank" href={sourceUrl}>Source code</SourceButton>     
    </Container>
  )
}

const Container = styled.div`
  border: 1px solid black;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  margin-bottom: 5vh;
  margin-top: 2vh; 
  margin-right: 10vw;
  margin-left: 10vw;
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: rgb(250, 250, 250);
  align-items: center;
  border-radius: 0px 0px 25px 0px;
  box-shadow: 1px 1px 1px black;
  padding: 4vw;

  @media (min-width: 1440px) {
    margin-left: 20vh;
    margin-right: 20vh;
  }
`

const SourceButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: white;
  background-color: black;
  width: 50%;
  text-decoration: none;
  border-radius: 25px;
  margin-top: 2vh;
  margin-bottom: 3vh;
  height: 5vh;
`

const LiveButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: white;
  background-color: red;
  width: 50%;
  text-decoration: none;
  border-radius: 25px;
  margin-top: 2vh;
  height: 5vh;
`

export default Project