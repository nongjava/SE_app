import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home/Home'
import Engineer from '../pages/Engineer/Engineer'
import Science from '../pages/Science/Science'
export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/Engineer" component={Engineer} />
    <Route exact path="/Science" component={Science} />

  </Switch>
)