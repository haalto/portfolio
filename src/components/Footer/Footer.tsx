import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'


const Footer: React.FC = () => {
  return (
    <Container>
      <Link href="https://github.com/haalto">
        <FontAwesomeIcon style={iconStyle} icon={faGithub} size={"3x"}/>
      </Link>
      <Link href="https://fi.linkedin.com/in/hannes-aaltonen-9911ba121">
        <FontAwesomeIcon style={iconStyle} icon={faLinkedin} size={"3x"}/>
      </Link>
    </Container>
  )
}

const Link = styled.a`
  cursor: pointer;
  color: black;
`

const Container = styled.footer`
  margin: 2vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const iconStyle: React.CSSProperties = {
  margin: "4vh"
}



export default Footer