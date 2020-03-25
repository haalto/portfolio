import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import styled from 'styled-components'

const CvPage: React.FC = () => {
  return (
    <Wrapper>
      <Navbar/>
      <Header>Curriculum Vitae</Header>
      <CV>
        <h1>Hannes Aaltonen</h1>
        <h2>Education</h2>
          <Item>Tampere University, Master of Science in Computer Science, 2019-</Item>
          <Item>University of Groningen, Exchange studies in Faculty of Business and Economics, Spring 2020 (Early return because of COVID-19 outbreak)</Item>
          <Item>Tampere University, Bachelor of Administrative Sciences in Public Financial Management, 2016-2019</Item>
        <h2>Skills</h2>
          <Item>Web development, Software development, Accounting and Finance, Public Administration</Item>
        <h2>Technical Skills</h2>
          <Item>Javascript, ReactJS, NodeJS, Java, Python, Postgres, MongoDB, Docker, Git, Keras, Tensorflow, SAP Fico</Item>
        <h2>Work experience</h2>
          <Item>
            <div>Service Specialist, Payments, Kesko - K-Group, Nov 2018 – Aug 2019</div>
          </Item>
          <Item>
            <div>Department Secretary, Finnish Immigration Service, May 2017 – Aug 2017</div>
          </Item>
          <Item>
            <div>Department Secretary, Finnish Immigration Service, Jun 2016 – Aug 2016</div>
          </Item>
          <Item>
          <div>Department Secretary, Finnish Immigration Service, Jul 2015 – Dec 2015</div>
          </Item>
          <Item>      
            <div>Civil Service Worker, Finnish Immigration Service, Aug 2014 – Jul 2015</div>
          </Item>
          <DowloadCV href={process.env.PUBLIC_URL + '/resources/CV.pdf'}>DOWLOAD PDF</DowloadCV>
      </CV> 
      <Footer/>
    </Wrapper>
  )
}

const Item = styled.div`
  margin: 2vh;
`
const Header = styled.h3`
  margin-top: 5vh;
  margin-bottom: 2vh;
  margin-right: 4vh;
  margin-left: 4vh;
  color: black;
  font-size: 3em;
  overflow: hidden;
  text-align: left;

  @media (min-width: 1300px) {
    text-align: center;
    margin: 3vh;
  }
`

const CV = styled.article`
  display: flex;
  flex-direction: column;
  background-color: white;
  margin: 5vh;
  height: 60%;
  border: 1px solid black;
  border-radius: 25px 25px 25px 25px;
  box-shadow: 1px 1px 1px black;
  font-size: 1em;
  text-align: left;
  padding: 2vw;

  @media (min-width: 1300px) {
    margin-left: 15vw;
    margin-right: 15vw;
    margin-top: 5vh;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background: #ff6e7f;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #bfe9ff, #ff6e7f);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #bfe9ff, #ff6e7f); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

const DowloadCV = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: white;
  background-color: red;
  width: 50%;
  text-decoration: none;
  border-radius: 25px;
  margin-top: 5vh;
  margin-bottom: 2vh;
  height: 5vh;
  cursor: pointer;
  align-self: center;
`

export default CvPage