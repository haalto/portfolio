import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Project from '../../components/Project/Project'
import styled from 'styled-components'
import Footer from '../../components/Footer/Footer'

const PortfolioPage: React.FC = () => {
  return (
    <Container>
      <Navbar/>
      <Header>PORTFOLIO</Header>
      <Project 
        header="ChatApp" 
        description="Full stack real time chat application with web sockets and user authentication"
        techs={['ReactJS,', 'NodeJS', 'MongoDB Atlas,', 'Socket.io']} 
        liveUrl="http://haalto-chatapp.herokuapp.com/" 
        sourceUrl="https://github.com/haalto/chatapp"/>
      <Project 
        header="Twitter-clone" 
        description="Full stack twitter clone made with TypeScript using Docker"
        techs={['ReactJS,', 'NodeJS', 'Postgres,', 'TypeScript,', 'Docker']} 
        liveUrl="" 
        sourceUrl="https://github.com/haalto/twitter-clone"/>
      <Project 
        header="redgreenblue" 
        description="Simple web application where you have to guess correct RGB value from three choices"
        techs={['ReactJS']} 
        liveUrl="http://redgreenblue.herokuapp.com/" 
        sourceUrl="https://github.com/haalto/redgreenblue"/>
      <Project 
        header="PERN-template" 
        description="Template for developing full stack web applications with Postgres, Express, ReactJS, NodeJS and TypeScript. Just add .env-file and run docker-compose up and you are ready to start developing!"
        techs={['ReactJS, NodeJS', 'Postgres,', 'TypeScript,', 'Docker']} 
        liveUrl="" 
        sourceUrl="https://github.com/haalto/PERN-template"/>
        <Footer/>
    </Container>
  )
}

const Header = styled.h3`
  margin-top: 12vh;
  margin-bottom: 2vh;
  margin-right: 4vh;
  margin-left: 4vh;
  border-bottom: 4px solid black;
  color: white;
  font-size: 3.5em;
  overflow: hidden;
  text-align: center;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background: #56ab2f;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #a8e063, #56ab2f);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #a8e063, #56ab2f); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */   
`

export default PortfolioPage