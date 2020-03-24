import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import LandingPage from './pages/Landing/LandingPage'
import CvPage from './pages/Cv/CvPage'
import PortfolioPage from './pages/Portfolio/PortfolioPage'
import ContactPage from './pages/Contact/ContactPage'

const  App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/cv" component={CvPage}/>
        <Route path="/portfolio" component={PortfolioPage}/>
        <Route path="/contact" component={ContactPage}/>
        <Redirect from='*' to='/' />
      </Switch>
    </BrowserRouter>
  )
}

export default App
