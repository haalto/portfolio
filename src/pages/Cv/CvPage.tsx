import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import styled from 'styled-components'

const CvPage: React.FC = () => {
  return (
    <Wrapper>
      <Navbar/>
      <h1>CV</h1>
      <CV>
        <h2>Hannes Aaltonen</h2>
        <h2>Education</h2>
          <h3>Tampere University, Master of Science in Computer Science, 2019-</h3>
          <h3>University of Groningen, Exchange studies in Faculty of Business and Economics, Spring 2020 (Early return because of COVID-19 outbreak)</h3>
          <h3>Tampere University, Bachelor of Administrative Sciences in Public Financial Management, 2016-2019</h3>
        <h2>Skills</h2>
          <h3>Web development, Software development, Accounting and Finance, Public Administration</h3>
        <h2>Technical Skills</h2>
          <h3>Javascript, ReactJS, NodeJS, Java, Python, Postgres, MongoDB, Docker, Git, Keras, Tensorflow, SAP Fico</h3>
        <h2>Work experience</h2>
          <h3>
            Service Specialist, Payments
            Kesko - K-Group
            Nov 2018 – Aug 2019
          </h3>
          <h3>
            Department Secretary
            Maahanmuuttovirasto - Migrationsverket - Finnish Immigration Service
            May 2017 – Aug 2017
          </h3>
          <h3>
            Department Secretary
            Maahanmuuttovirasto - Migrationsverket - Finnish Immigration Service
            Jun 2016 – Aug 2016
          </h3>
          <h3>
            Department Secretary
            Maahanmuuttovirasto - Migrationsverket - Finnish Immigration Service
            Jul 2015 – Dec 2015
          </h3>
          <h3>      
            Civil Service Worker
            Maahanmuuttovirasto - Migrationsverket - Finnish Immigration Service
            Aug 2014 – Jul 2015
          </h3>
      </CV>
      <DowloadCV href={process.env.PUBLIC_URL + '/resources/CV.pdf'}>DOWLOAD PDF</DowloadCV>
      <Footer/>
    </Wrapper>
  )
}

const CV = styled.article`
  display: flex;
  flex-direction: column;
  background-color: white;
  margin: 3vh;
  height: 60%;
  border: 1px solid black;
  border-radius: 0px 0px 25px 0px;
  box-shadow: 1px 1px 1px black;
  font-size: 1em;
  text-align: center;
  padding-top: 5vh;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background: #EFEFBB;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #D4D3DD, #EFEFBB);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #D4D3DD, #EFEFBB); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

const DowloadCV = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: white;
  background-color: red;
  width: 40%;
  text-decoration: none;
  border-radius: 25px;
  margin-top: 2vh;
  margin-bottom: 3vh;
  height: 5vh;
  cursor: pointer;
`

export default CvPage