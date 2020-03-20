import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Store } from '../../store/Store'

const Navbar: React.FC = () => {
  const history = useHistory()
  const { state, dispatch } = useContext(Store)

  const handleClick = (target: string) => {
    dispatch({type: 'TOGGLE'})
    history.push(target)
  }

  return (
    <nav>
    {
      !state.toggled 
      ?
        <FontAwesomeIcon style={navOpenButtonStyle} onClick={() => dispatch({type: 'TOGGLE'})} size="2x" icon={faBars}/>  
      : 
        <div style={navContentStyle}>
          <FontAwesomeIcon style={navCloseButtonStyle} onClick={() => dispatch({type: 'TOGGLE'})} size="2x" icon={faTimes}/>
          <ul style={listStyle}>
            <li style={linkStyle} key={1} onClick={() => handleClick('/')}>Home</li>
            <li style={linkStyle} key={2} onClick={() => handleClick('/cv')}>CV</li>
            <li style={linkStyle} key={3} onClick={() => handleClick('/portfolio')}>Portfolio</li>
            <li style={linkStyle} key={4} onClick={() => handleClick('/contact')}>Contact</li>
          </ul>
        </div>        
    }
    </nav>
  )
}

const navOpenButtonStyle: React.CSSProperties = {
  cursor: 'pointer',
  margin: '5vh',
  position: 'fixed',
  textAlign: 'right',
  flexFlow: 'row-reverse',
  float: 'right',
  right: '0px'  
}

const navCloseButtonStyle: React.CSSProperties = {
  position: 'fixed',
  cursor: 'pointer',
  margin: '5vh',
  color: 'white',
  right: '0px'
}

const navContentStyle: React.CSSProperties = {
  overflowX: 'hidden',
  backgroundColor: 'black',
  height: '100vh',
  margin: 0,
  padding: '0',
  width: '100%',
  position: 'absolute'
}

const listStyle: React.CSSProperties = {
  listStyleType: 'none',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  marginTop: '15vh',
  padding: '0',
  fontSize: '2.5em'
}

const linkStyle: React.CSSProperties = {
  color: 'white',
  margin: '4vh',
  cursor: 'pointer',
}

export default Navbar