import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Project from '../../components/Project/Project'

const PortfolioPage: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <h2>On this page I have listed my hobby projects</h2>
      <Project 
        header="ChatApp" 
        description="Full stack real time chat application with web sockets and user authentication"
        techs={['ReactJS, NodeJS', 'MongoDB Atlas, Socket.io']} 
        liveUrl="http://haalto-chatapp.herokuapp.com/" 
        sourceUrl="https://github.com/haalto/chatapp"/>
      <Project 
        header="Twitter-clone" 
        description="Full stack twitter clone made with TypeScript using Docker"
        techs={['ReactJS, NodeJS', 'Postgres, TypeScipt', 'Docker']} 
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
        techs={['ReactJS, NodeJS', 'Postgres, TypeScipt', 'Docker']} 
        liveUrl="" 
        sourceUrl="https://github.com/haalto/PERN-template"/>
    </div>
  )
}

export default PortfolioPage