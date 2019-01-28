import React from 'react'
import Page from '../../components/Page'
import { Tabs, Tab } from '../../components/Tabs'
import Dialog from '../../components/Dialog'
import { Button, IconButton, ButtonGroup } from '../../components/Button'

class Dashboard extends React.Component {
  state = { open: false }

  render() {
    const { open } = this.state

    return (
      <Page title="Welcome Center">
        <Tabs>
          <Tab label="Tab One" value="one">
            <div>Dashboard tab 1 here</div>
            <ButtonGroup>
              <Button>Test Button</Button>
              <Button type="primary" onClick={() => this.setState({ open: true })}>
                Test Button
              </Button>
              <IconButton name="account" onClick={() => this.setState({ open: true })} />
              <IconButton name="close" onClick={() => this.setState({ open: true })} />
            </ButtonGroup>
            <Dialog
              title="Are you sure?"
              open={open}
              onClose={() => this.setState({ open: false })}
              actions={
                <ButtonGroup>
                  <Button onClick={() => this.setState({ open: false })}>Cancel</Button>
                  <Button type="primary" onClick={() => this.setState({ open: false })}>
                    Delete
                  </Button>
                </ButtonGroup>
              }
            >
              Are you sure you want to delete 4 items? This action cannot be undone. Are you sure you want to delete 4 items?
              This action cannot be undone.
            </Dialog>
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
