import React from 'react'
import Page from '../../components/Page'
import { Tabs, Tab } from '../../components/Tabs'

class Dashboard extends React.Component {
  render() {
    return (
      <Page title="Welcome Center">
        <Tabs>
          <Tab label="Tab One" value="one">
            <div>Dashboard tab 1 here</div>
          </Tab>
          <Tab label="Tab Two" value="two">
            <div>Dashboard tab 2 here</div>
          </Tab>
          <Tab label="Tab Three" value="three">
            <div>Dashboard tab 3 here</div>
          </Tab>
        </Tabs>
      </Page>
    )
  }
}

export default Dashboard
