import React from 'react'
import { useHistory } from 'react-router-dom'

const Navbar: React.FC = () => {
  const history = useHistory()

  return (
    <nav style={navStyle}>
      <ul style={listStyle}>
        <li style={linkStyle} key={1} onClick={() => history.push('/')}>Home</li>
        <li style={linkStyle} key={2} onClick={() => history.push('/cv')}>CV</li>
        <li style={linkStyle} key={3} onClick={() => history.push('/portfolio')}>Portfolio</li>
        <li style={linkStyle} key={4} onClick={() => history.push('/contact')}>Contact</li>
      </ul>
    </nav>
  )
}

const navStyle: React.CSSProperties = {
  width: '100vh',
  margin: '3vh'
}

const listStyle: React.CSSProperties = {
  margin: 0,
  width: '100vh',
  listStyleType: 'none',
  display: 'flex',
  flexDirection: 'row'
}

const linkStyle: React.CSSProperties = {
  color: 'red',
  marginRight: '5vh'
}

export default Navbar