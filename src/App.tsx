import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LandingPage from './pages/Landing/LandingPage'
import CvPage from './pages/Cv/CvPage'
import PortfolioPage from './pages/Portfolio/PortfolioPage'
import ContactPage from './pages/Contact/ContactPage'

const  App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/cv" component={CvPage}/>
        <Route exact path="/portfolio" component={PortfolioPage}/>
        <Route exact path="/contact" component={ContactPage}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
