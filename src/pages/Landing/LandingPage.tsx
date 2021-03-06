import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import styled from 'styled-components'

const LandingPage: React.FC = () => {
  return (
    <Wrapper>
      <Navbar/>
      <TextContainer>
        <h1>Hey there!</h1>
        <h3>My name is Hannes and I am a MSc student in Computer Science at Tampere University.</h3>
        <h3>I am interested in web development and data engineering and looking to start my career as a software developer.</h3>
        <h3>I have a bachelor's degree in Public Financial Management and work experience in public sector and in accounting</h3>
        <h3>You can find my CV and portfolio from this site!</h3>
      </TextContainer>
      <Footer/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  position: relative;
  flex-direction: column;
  background: #FBD3E9;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #BB377D, #FBD3E9);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #BB377D, #FBD3E9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  `

const TextContainer = styled.article`
  margin-top: 10vh;
  margin-left: 0vh;
  margin-right: 10vh;
  margin-bottom: 0vh;
  background-color: black;
  color: white;
  border-radius: 0px 50px 50px 0px;
  padding: 4vh;
`

export default LandingPage