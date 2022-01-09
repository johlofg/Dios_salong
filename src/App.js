import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './componants/Header'
import Main from './componants/Main'
import Footer from './componants/Footer'
import Booking from './componants/Booking'

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/booking" component={Booking} />
      </Switch>
      <Footer />
    </BrowserRouter>

  )
}
