import React from 'react'
import styled from 'styled-components'

import Avatar from '../Avatar'
import Dialog from '../Dialog'
import Icon from '../Icon'

const MenuWrap = styled.div``
const AvatarWrap = styled.div`
  position: absolute;
  top: ${props => (props.open ? 112 : 16)}px;
  right: ${props => (props.open ? 92 : 24)}px;
  z-index: 801;
  transition: ${props =>
    props.open ? `top 200ms ease-out,right 200ms ease-in-out` : `top 200ms ease-out,right 200ms ease-out`};
`
const StyledAvatar = styled(Avatar)`
  border: ${props => (props.open ? 8 : 0)}px solid white;
  transition: 200ms ease-in-out;
`
const AvatarButton = styled.button`
  padding: 0;
  border: 0;
  background: transparent;
  font-size: 0;
  outline: 0;
  cursor: pointer;
`

const MenuHeader = styled.div`
  background-color: #313642;
  height: 160px;
  background-image: url(https://mobile-cdn.lds.org/17/f8/17f8873768cf8e5aa2054762f56603aab3fd1175/draper_utah_temple.jpg);
  background-size: cover;
  background-position: center;
`

const MenuItems = styled.div`
  padding: 12px 0;
  margin: 18px 0;
  list-style: none;
  position: relative;
`
const MenuItem = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  text-decoration: none;
  transition: 200ms;
  cursor: pointer;
  &:hover {
    background-color: #eff0f0;
  }
`
const MenuItemIconWrap = styled.div`
  padding: 0 20px;
  color: #313642;
  opacity: 0.65;
  transition: 200ms;
`
const MenuItemLabel = styled.div`
  flex: 1;
  font-family: 'Proxima Nova', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #313642;
  letter-spacing: 0;
  text-align: left;
  transition: 200ms;
`
const UserInfo = styled.div`
  margin-top: 56px;
`
const UserTitle = styled.h3`
  color: #007fa4;
  font-family: 'Adobe Garamond Pro', Garamond, Georgia, serif;
  line-height: 1em;
  font-size: 24px;
  font-weight: normal;
  text-align: center;
  margin: 0 0 4px 0;
`
const UserDescription = styled.div`
  font-family: 'Proxima Nova', sans-serif;
  font-weight: 500;
  font-size: 12px;
  text-align: center;
  color: #4a5055;
`

const Hr = styled.hr`
  border: 0;
  display: block;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.15);
`

const userMenuData = [
  {
    id: 'my-profile',
    icon: 'account-circle',
    label: 'My Profile',
    route: '/profile'
  },
  {
    id: 'my-ward',
    icon: 'ward',
    label: 'My Ward',
    route: '/ward'
  },
  {
    id: 'my-stake',
    icon: 'stake',
    label: 'My Stake',
    route: '/stake'
  },
  {
    id: 'my-temple',
    icon: 'temple',
    label: 'My Temple',
    route: '/temple'
  },
  {
    id: 'patriarchal-blessing',
    icon: 'file-document',
    label: 'My Patriarchal Blessing',
    route: '/patriachal-blessing'
  }
]

const userActionData = [
  {
    id: 'lds-org',
    icon: 'arrow-left',
    label: 'Back to LDS.org',
    route: '/lds-org'
  },
  {
    id: 'sign-out',
    icon: 'key',
    label: 'Sign out',
    route: '/sign-out'
  }
]

const Item = ({ icon, label, route, itemRef, active }) => (
  <li ref={itemRef}>
    <MenuItem to={route} className={active && 'active'}>
      <MenuItemIconWrap>
        <Icon name={icon} />
      </MenuItemIconWrap>
      <MenuItemLabel>{label}</MenuItemLabel>
    </MenuItem>
  </li>
)

class UserMenu extends React.Component {
  state = {
    showMenu: false
  }

  showMenu = () => this.setState({ showMenu: true })
  closeMenu = () => this.setState({ showMenu: false })

  render() {
    const { user } = this.props
    const { showMenu } = this.state

    return (
      <MenuWrap>
        <AvatarWrap open={showMenu}>
          <AvatarButton onClick={this.showMenu}>
            <StyledAvatar open={showMenu} size={showMenu ? 80 : 32} src={'https://randomuser.me/api/portraits/men/33.jpg'} />
          </AvatarButton>
        </AvatarWrap>
        <Dialog
          width={'280px'}
          position={{ x: 'right', y: 'stretch' }}
          zIndex={800}
          hideCloseButton
          noPadding
          open={showMenu}
          onClose={this.closeMenu}
        >
          <MenuHeader open={showMenu} />
          <UserInfo>
            <UserTitle>James Condiff</UserTitle>
            <UserDescription>Lantana Ward, Lewisville Texas Stake</UserDescription>
          </UserInfo>
          <MenuItems>
            {userMenuData.map(item => (
              <Item key={item.id} icon={item.icon} label={item.label} route={item.route} />
            ))}
            <Hr />
            {userActionData.map(item => (
              <Item key={item.id} icon={item.icon} label={item.label} route={item.route} />
            ))}
          </MenuItems>
        </Dialog>
      </MenuWrap>
    )
  }
}

export default UserMenu
