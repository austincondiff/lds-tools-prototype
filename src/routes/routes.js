import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Dashboard from './dashboard'
import Donations from './donations'

class AppRoutes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/donations" exact component={Donations} />
      </Switch>
    )
  }
}

export default AppRoutes
