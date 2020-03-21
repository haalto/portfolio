import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Store } from '../../store/Store'
import styled from 'styled-components'

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
        ? <OpenButton>
            <FontAwesomeIcon onClick={() => dispatch({type: 'TOGGLE'})} size="3x" icon={faBars}/>
          </OpenButton>
        : 
          <Layer>
            <CloseButton>
              <FontAwesomeIcon onClick={() => dispatch({type: 'TOGGLE'})} size="3x" icon={faTimes}/>
            </CloseButton>
            <List>
              <Link onClick={() => handleClick('/')}>Home</Link>
              <Link onClick={() => handleClick('/cv')}>CV</Link>
              <Link onClick={() => handleClick('/portfolio')}>Portfolio</Link>
              <Link onClick={() => handleClick('/contact')}>Contact</Link>
            </List>
          </Layer>        
      }
    </nav>
  )
}

const Link = styled.li`
  color: #f1f1f1;
  margin: 4vh;
  cursor: pointer;
`

const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 10vh;
  padding: 0;
  font-size: 2.5em;
  align-items: center;
`
const CloseButton = styled.div`
  position: fixed;
  cursor: pointer;
  margin: 2vh;
  color: white;
  right: 0;
`

const OpenButton = styled.div`
  position: fixed;
  cursor: pointer;
  margin: 2vh;
  right: 0;
`

const Layer = styled.div`
  overflow: hidden;
  background-color: black;
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
`

export default Navbar