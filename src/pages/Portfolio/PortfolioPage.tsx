import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Project from '../../components/Project/Project'

const PortfolioPage: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <h2>On this page I have listed my hobby projects</h2>
      <Project 
        header="Redgreenblue" 
        description="Simple web application where you have to guess correct RGB value from three choices" 
        liveUrl="http://redgreenblue.herokuapp.com/" 
        sourceUrl="https://github.com/haalto/redgreenblue"/>
    </div>
  )
}

export default PortfolioPage