import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import styled from 'styled-components'
import AppRoutes from './routes'

import Navigation from './components/Navigation'
import UserMenu from './components/UserMenu'
import { ToastContainer } from './components/Toast'

const AppWrap = styled.div`
  margin-left: ${props => (props.collapsed ? 80 : 280)}px;
  position: relative;
  transition: 250ms;
`

class App extends Component {
  state = { navCollapsed: false }

  render() {
    const { navCollapsed } = this.state
    return (
      <div className="App">
        <Router>
          <AppWrap collapsed={navCollapsed}>
            <Navigation onChange={navCollapsed => this.setState({ navCollapsed })} />
            <AppRoutes />
            <UserMenu />
            <ToastContainer />
          </AppWrap>
        </Router>
      </div>
    )
  }
}

export default App
