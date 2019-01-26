import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import styled from 'styled-components'
import AppRoutes from './routes'

import Navigation from './components/Navigation'
import UserMenu from './components/UserMenu'
import Icon from './components/Icon'

const AppWrap = styled.div`
  margin-left: ${props => (props.collapsed ? 80 : 280)}px;
  position: relative;
  transition: 250ms;
`

const NavToggle = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 101;
  border: 0;
  background-color: transparent;
  width: 32px;
  height: 32px;
  margin: 16px 24px;
  padding: 0;
  outline: 0;
`

class App extends Component {
  state = {
    navCollapsed: false
  }

  render() {
    const { navCollapsed } = this.state
    return (
      <div className="App">
        <Router>
          <AppWrap collapsed={navCollapsed}>
            <Navigation collapsed={navCollapsed} />
            <NavToggle onClick={() => this.setState({ navCollapsed: !navCollapsed })}>
              <Icon name="menu" />
            </NavToggle>
            <AppRoutes />
            <UserMenu />
          </AppWrap>
        </Router>
      </div>
    )
  }
}

export default App
