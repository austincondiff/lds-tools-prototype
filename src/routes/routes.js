import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Dashboard from './dashboard'
import GospelLibrary from './gospel-library'
import WardDirectory from './ward-directory'
import WardCalendar from './ward-calendar'
import MyCalling from './my-calling'
import Donations from './donations'
import FamilySearch from './family-search'
import Indexing from './indexing'

class AppRoutes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/gospel-library" exact component={GospelLibrary} />
        <Route path="/ward-directory" exact component={WardDirectory} />
        <Route path="/ward-calendar" exact component={WardCalendar} />
        <Route path="/my-calling" exact component={MyCalling} />
        <Route path="/donations" exact component={Donations} />
        <Route path="/family-search" exact component={FamilySearch} />
        <Route path="/indexing" exact component={Indexing} />
      </Switch>
    )
  }
}

export default AppRoutes
