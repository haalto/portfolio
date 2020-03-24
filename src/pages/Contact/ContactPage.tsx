import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import styled from 'styled-components'

const ContactPage: React.FC = () => {
  return (
    <Wrapper>
      <Navbar/>
      <Header>Contact</Header>
      <ContactInfo>
        <h3>&#97;&#97;&#108;&#116;&#111;&#110;&#101;&#110;&#46;&#104;&#97;&#110;&#110;&#101;&#115;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;</h3>
        <h3>&#43;&#51;&#53;&#56; &#52;&#53; &#54;&#53;&#48; &#51;&#52;&#53;&#57;</h3>
        <a href="https://fi.linkedin.com/in/hannes-aaltonen-9911ba121"><h3>LinkedIn</h3></a>
        <a href="https://github.com/haalto"><h3>GithHub</h3></a>
        <a href="https://haalto.dev/"><h3>haalto.dev</h3></a>
      </ContactInfo>
      <Footer/>
    </Wrapper>
  )
}

const Header = styled.h3`
  margin-top: 5vh;
  margin-bottom: 2vh;
  margin-right: 4vh;
  margin-left: 4vh;
  color: black;
  font-size: 3em;
  overflow: hidden;
  text-align: left;

  @media (min-width: 1440px) {
    text-align: center;
    margin: 3vh;
  }
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 60%;
  border: 1px solid black;
  border-radius: 25px 25px 25px 25px;
  box-shadow: 1px 1px 1px black;
  font-family: Courier New;
  font-size: 1em;
  text-align: center;
  margin-bottom: 10vh;
  margin-left: 5vh;
  margin-right: 5vh;
  margin-top: 5vh;
  padding-top: 5vh;
  padding-bottom: 5vh;

  @media (min-width: 1440px) {
    margin-left: 10vh;
    margin-right: 10vh;
    margin-top: 5vh;
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background: #C6FFDD;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #f7797d, #FBD786, #C6FFDD);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #f7797d, #FBD786, #C6FFDD); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */    
`

export default ContactPage