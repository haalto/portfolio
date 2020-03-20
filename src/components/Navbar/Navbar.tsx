import React from 'react'
import { useHistory } from 'react-router-dom'

const Navbar: React.FC = () => {
  const history = useHistory()

  return (
    <nav>
      <li onClick={() => history.push('/')}>Home</li>
      <li onClick={() => history.push('/cv')}>CV</li>
      <li onClick={() => history.push('/portfolio')}>Portfolio</li>
      <li onClick={() => history.push('/contact')}>Contact</li>
    </nav>
  )
}

export default Navbar