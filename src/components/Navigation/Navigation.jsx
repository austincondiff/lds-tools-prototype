import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from '../Icon'
import { withRouter, Link } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'

const NavWrap = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: ${props => (props.collapsed ? 80 : 280)}px;
  background-color: #22282e;
  overflow: hidden;
  margin-left: ${props => (props.active ? 0 : '-280px')};
  transition: 250ms;
  padding: 12px 0;
`
const LogoWrap = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 24px;
  padding: 12px 0;
  opacity: ${props => (props.collapsed ? 0 : 1)};
  transition: ${props => (props.collapsed ? 100 : 250)}ms ${props => (props.collapsed ? 0 : 100)}ms;
`
const NavSearchWrap = styled.div`
  padding: 12px 16px;
  position: relative;
  margin-top: ${props => (props.collapsed ? -64 : 0)}px;
  transition: 250ms;
`

const NavSearch = styled.input.attrs({
  type: 'text',
  placeholder: 'Search'
})`
  background-color: rgba(255, 255, 255, ${props => (props.collapsed ? 0 : 0.1)});
  border-radius: 24px;
  border: 0;
  height: 36px;
  padding: 8px 8px 8px 48px;
  width: 100%;
  color: white;
  font-family: 'Proxima Nova', sans-serif;
  font-size: 14px;
  font-weight: 500;
  box-sizing: border-box;
  outline: none;
  transition: 200ms;
  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }
  &:focus {
    background-color: white;
    color: #4a5055;
  }
`
const NavSearchIcon = styled(Icon).attrs({
  name: 'magnify'
})`
  color: rgba(255, 255, 255, ${props => (props.collapsed ? 0.5 : 0.33)});
  position: absolute;
  top: 18px;
  left: ${props => (props.collapsed ? 28 : 24)}px;
  transition: color 200ms, left 250ms;
  ${NavSearch}:focus ~ div & {
    color: #4a5055;
  }
`
const NavItems = styled.ul`
  width: 280px;
  padding: 12px 0;
  margin: 0;
  list-style: none;
  position: relative;
  margin-top: ${props => (props.collapsed ? -16 : 0)}px;
  transition: 250ms;
`
const NavItem = styled(Link)`
  display: flex;
  height: 40px;
  align-items: center;
  text-decoration: none;
`
const NavItemIconWrap = styled.div`
  padding: 0 ${props => (props.collapsed ? 28 : 20)}px;
  color: white;
  opacity: 0.5;
  transition: opacity 200ms, padding 250ms;
  ${NavItem}.active &, ${NavItem}:hover & {
    opacity: 1;
  }
`
const NavItemLabel = styled.div`
  flex: 1;
  opacity: ${props => (props.collapsed ? 0 : 0.75)};
  font-family: 'Proxima Nova', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: left;
  transition: 200ms;
  ${NavItem}.active &, ${NavItem}:hover & {
    opacity: ${props => (props.collapsed ? 0 : 1)};
  }
`
const ActiveItemIndicator = styled.div`
  width: 3px;
  height: ${props => (props.height ? props.height : 0)}px;
  position: absolute;
  top: ${props => (props.position ? props.position : 0)}px;
  left: 0;
  background-color: #01b6d1;
  transition: 200ms;
`
const FlairWrap = styled.div`
  position: absolute;
  margin-bottom: -85%;
  padding-top: 138%;
  background-image: linear-gradient(to top, rgba(34, 40, 46, 1) 80%, rgba(34, 40, 46, 0) 100%);
  left: 0;
  right: 0;
  bottom: 0;
  opacity: ${props => (props.active ? 1 : 0)};
  transition: ${props => (props.active ? 500 : 100)}ms;
  ${props => props.active && `transition-delay: 250ms;`}
  pointer-events: none;
`
const Flair1 = styled.div`
  opacity: ${props => (props.active ? 0.09 : 0.5)};
  background-color: #86a3b3;
  padding-top: 100%;
  transform: rotate(${props => (props.active ? 6 : 44)}deg);
  filter: blur(${props => (props.active ? 0 : 16)}px);
  position: absolute;
  bottom: 0;
  left: -100%;
  right: -100%;
  transition: ${props => (props.active ? 1000 : 200)}ms;
  ${props => props.active && `transition-delay: 100ms;`}
`
const Flair2 = styled.div`
  opacity: ${props => (props.active ? 0.09 : 0.5)};
  background-color: #86a3b3;
  padding-top: 100%;
  transform: rotate(${props => (props.active ? -16 : -36)}deg);
  filter: blur(${props => (props.active ? 0 : 16)}px);
  position: absolute;
  bottom: 0;
  left: -100%;
  right: -100%;
  transition: ${props => (props.active ? 1000 : 200)}ms;
  ${props => props.active && `transition-delay: 100ms;`}
`
const Flair3 = styled.div`
  opacity: ${props => (props.active ? 0.09 : 0.5)};
  background-color: #86a3b3;
  padding-top: 100%;
  transform: rotate(${props => (props.active ? -26 : -46)}deg);
  filter: blur(${props => (props.active ? 0 : 16)}px);
  position: absolute;
  bottom: 0;
  left: -100%;
  right: -100%;
  transition: ${props => (props.active ? 1000 : 200)}ms;
  ${props => props.active && `transition-delay: 100ms;`}
`

const navData = [
  {
    id: 'dashboard',
    icon: 'dashboard',
    label: 'Welcome Center',
    route: '/'
  },
  {
    id: 'gospel-library',
    icon: 'book-open-page',
    label: 'Gospel Library',
    route: '/gospel-library'
  },
  {
    id: 'ward-directory',
    icon: 'contacts',
    label: 'Ward Directory',
    route: '/ward-directory'
  },
  {
    id: 'ward-calendar',
    icon: 'calendar',
    label: 'Ward Calendar',
    route: '/ward-calendar'
  },
  {
    id: 'my-calling',
    icon: 'clipboard-check',
    label: 'My Calling',
    route: '/my-calling'
  },
  {
    id: 'donations',
    icon: 'gift',
    label: 'Donations',
    route: '/donations'
  },
  {
    id: 'family-search',
    icon: 'account-search',
    label: 'Family Search',
    route: '/family-search'
  },
  {
    id: 'indexing',
    icon: 'index-card',
    label: 'Indexing',
    route: '/indexing'
  }
]

const Item = ({ icon, label, route, itemRef, active, collapsed }) => (
  <li ref={itemRef}>
    <NavItem to={route} className={active && 'active'}>
      <NavItemIconWrap collapsed={collapsed}>
        <Icon name={icon} />
      </NavItemIconWrap>
      <NavItemLabel collapsed={collapsed}>{label}</NavItemLabel>
    </NavItem>
  </li>
)

class Navigation extends React.Component {
  state = {
    mounted: false,
    activeItemHeight: null,
    activeItemPosition: null,
    activeItem: null
  }

  navItemRefs = {}

  componentDidMount() {
    window.setTimeout(() => this.setState({ mounted: true }), 0)
    this.updateActiveItemIndicator()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location !== this.props.location) {
      this.updateActiveItemIndicator()
    }
  }

  updateActiveItemIndicator = () => {
    const rootLocation = `/${this.props.location.pathname !== '/' ? this.props.location.pathname.split('/')[1] : ''}`
    const activeItem = navData.filter(item => item.route === rootLocation)[0]
    const activeItemEl = this.navItemRefs[`item_${activeItem.id}`]

    this.setState({ activeItem, activeItemHeight: activeItemEl.offsetHeight, activeItemPosition: activeItemEl.offsetTop })
  }

  render() {
    const { collapsed } = this.props
    const { mounted = false, activeItem, activeItemHeight, activeItemPosition } = this.state

    return (
      <NavWrap active={mounted} collapsed={collapsed}>
        <LogoWrap collapsed={collapsed}>
          <img src={logo} className="App-logo" alt="logo" />
        </LogoWrap>
        <NavSearchWrap collapsed={collapsed}>
          <NavSearch collapsed={collapsed} />
          <NavSearchIcon collapsed={collapsed} />
        </NavSearchWrap>
        <NavItems collapsed={collapsed}>
          {navData.map(item => (
            <Item
              key={item.id}
              icon={item.icon}
              label={item.label}
              route={item.route}
              active={activeItem && item.id === activeItem.id}
              collapsed={collapsed}
              itemRef={el => {
                this.navItemRefs[`item_${item.id}`] = el
              }}
            />
          ))}
          <ActiveItemIndicator height={activeItemHeight} position={activeItemPosition} />
        </NavItems>
        <FlairWrap active={mounted}>
          <Flair1 active={mounted} />
          <Flair2 active={mounted} />
          <Flair3 active={mounted} />
        </FlairWrap>
      </NavWrap>
    )
  }
}

Navigation.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  in: PropTypes.bool,
  onEnter: PropTypes.func,
  onExit: PropTypes.func,
  style: PropTypes.object,
  theme: PropTypes.object,
  timeout: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({ enter: PropTypes.number, exit: PropTypes.number })])
}

Navigation.defaultProps = { timeout: 200 }

export default withRouter(Navigation)
