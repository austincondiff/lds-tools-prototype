import React from 'react'
import Page from '../../components/Page'
import { Tabs, Tab } from '../../components/Tabs'

class Donations extends React.Component {
  render() {
    return (
      <Page title="Family Search">
        <Tabs>
          <Tab label="Family Tree" value="donate">
            <div>Family Tree Page</div>
          </Tab>
          <Tab label="Search" value="search">
            <div>Search Page</div>
          </Tab>
          <Tab label="Memories" value="memories">
            <div>Memories Page</div>
          </Tab>
          <Tab label="Indexing" value="indexing">
            <div>Indexing Page</div>
          </Tab>
        </Tabs>
      </Page>
    )
  }
}

export default Donations
