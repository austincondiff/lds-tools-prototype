import React from 'react'
import Page from '../../components/Page'
import { Tabs, Tab } from '../../components/Tabs'

class Donations extends React.Component {
  render() {
    return (
      <Page title="My Calling">
        <Tabs>
          <Tab label="Donate" value="donate">
            <div>Donate page</div>
          </Tab>
          <Tab label="History" value="history">
            <div>History page</div>
          </Tab>
          <Tab label="Statements" value="statements">
            <div>Statements page</div>
          </Tab>
          <Tab label="Settings" value="settings">
            <div>Settings page</div>
          </Tab>
          <Tab label="Help" value="help">
            <div>Help page</div>
          </Tab>
        </Tabs>
      </Page>
    )
  }
}

export default Donations
