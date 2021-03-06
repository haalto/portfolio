import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Project from '../../components/Project/Project'
import styled from 'styled-components'
import Footer from '../../components/Footer/Footer'

const PortfolioPage: React.FC = () => {
  return (
    <Wrapper>
      <Navbar/>
      <Header>Portfolio</Header>
      <Projects>
        <Project 
          header="ChatApp" 
          description="Full stack real time chat application with web sockets and user authentication"
          techs={['ReactJS,', 'NodeJS,', 'MongoDB Atlas,', 'Socket.io']} 
          liveUrl="http://haalto-chatapp.herokuapp.com/" 
          sourceUrl="https://github.com/haalto/chatapp"/>
        <Project 
          header="Twitter-clone" 
          description="Full stack twitter clone made with TypeScript using Docker"
          techs={['ReactJS,', 'NodeJS,', 'Postgres,', 'TypeScript,', 'Docker']} 
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
          techs={['ReactJS,', 'NodeJS,', 'Postgres,', 'TypeScript,', 'Docker']} 
          liveUrl="" 
          sourceUrl="https://github.com/haalto/PERN-template"/>
      </Projects>
      <Footer/>
    </Wrapper>
  )
}

const Header = styled.h3`
  margin-top: 5vh;
  margin-bottom: 2vh;
  margin-right: 4vw;
  margin-left: 4vw;
  color: black;
  font-size: 3em;
  overflow: hidden;
  text-align: left;

  @media (min-width: 1300px) {
    text-align: center;
    margin: 3vh;
  }
`
const Projects = styled.div`
  display: flex;
  flex-direction: column;
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  background: #ED4264;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #FFEDBC, #ED4264);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #FFEDBC, #ED4264); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
     
`
export default PortfolioPage