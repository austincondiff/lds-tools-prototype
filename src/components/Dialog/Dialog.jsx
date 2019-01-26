import React from 'react'
import PropTypes from 'prop-types'

import Modal from '../Modal'
import Grow from '../Grow'
import Slide from '../Slide'
import Icon from '../Icon'

import styled from 'styled-components'

const DialogWrap = styled.div`
  background-color: white;
  outline: none;
  ${props => !props.width && `min-width: 500px;`}
  ${props => props.width && `width: ${props.width};`}
  box-shadow:
    ${props => {
      if (props.position.x === 'center') return 0
      if (props.position.x === 'left') return 2
      if (props.position.x === 'right') return -2
      if (props.position.x === 'stretch') return 0
    }}px ${props => {
  if (props.position.y === 'center') return 2
  if (props.position.y === 'top') return 2
  if (props.position.y === 'bottom') return -2
  if (props.position.y === 'stretch') return 0
}}px 4px rgba(0, 0, 0, 0.15), ${props => {
  if (props.position.x === 'center') return 0
  if (props.position.x === 'left') return 8
  if (props.position.x === 'right') return -8
  if (props.position.x === 'stretch') return 0
}}px ${props => {
  if (props.position.y === 'center') return 8
  if (props.position.y === 'top') return 8
  if (props.position.y === 'bottom') return -8
  if (props.position.y === 'stretch') return 0
}}px 16px rgba(0, 0, 0, 0.15);
${props => props.position.x === 'stretch' && `flex: 1;`}
`
const Header = styled.div`
  justify-content: space-between;
  align-items: center;
`
const H1 = styled.h1`
  color: #007fa4;
  font-family: 'Adobe Garamond Pro', Garamond, Georgia, serif;
  line-height: 1em;
`
const CloseButton = styled.button``

// endregion

class Dialog extends React.Component {
  static propTypes = {
    heading: PropTypes.string.isRequired,
    onClose: PropTypes.func
  }

  handleBackdropClick = event => {
    if (event.target !== event.currentTarget) {
      return
    }

    if (this.props.onBackdropClick) {
      this.props.onBackdropClick(event)
    }

    if (!this.props.disableBackdropClick && this.props.onClose) {
      this.props.onClose(event, 'backdropClick')
    }
  }

  render() {
    const {
      open,
      title,
      onClose,
      children,
      hideCloseButton,
      transitionDuration,
      BackdropProps,
      disableBackdropClick,
      disableEscapeKeyDown,
      onEscapeKeyDown,
      onEnter,
      onEntering,
      onEntered,
      onExit,
      onExiting,
      onExited,
      position,
      TransitionProps,
      width,
      zIndex,
      ...other
    } = this.props

    let { TransitionComponent } = this.props

    if (position.x === 'left' || position.x === 'right' || position.y === 'top' || position.y === 'bottom') {
      TransitionComponent = Slide
    }

    let direction = null

    if (position.x === 'left') direction = 'right'
    if (position.x === 'right') direction = 'left'
    if (position.y === 'top') direction = 'down'
    if (position.y === 'bottom') direction = 'up'

    return (
      <Modal
        BackdropProps={{
          transitionDuration,
          ...BackdropProps
        }}
        disableBackdropClick={disableBackdropClick}
        disableEscapeKeyDown={disableEscapeKeyDown}
        onBackdropClick={this.handleBackdropClick}
        onEscapeKeyDown={onEscapeKeyDown}
        onClose={onClose}
        open={open}
        position={position}
        role="dialog"
        zIndex={zIndex}
        {...other}
      >
        <TransitionComponent
          appear
          in={open}
          timeout={transitionDuration}
          onEnter={onEnter}
          onEntering={onEntering}
          onEntered={onEntered}
          onExit={onExit}
          onExiting={onExiting}
          onExited={onExited}
          direction={direction}
          {...TransitionProps}
        >
          <DialogWrap width={width} position={position}>
            <Header>
              {title && <H1>{title}</H1>}
              {!hideCloseButton && (
                <CloseButton onClick={onClose}>
                  <Icon name="close" />
                </CloseButton>
              )}
            </Header>
            <div>{children}</div>
          </DialogWrap>
        </TransitionComponent>
      </Modal>
    )
  }
}

Dialog.defaultProps = { TransitionComponent: Grow, transitionDuration: 200, position: { x: 'center', y: 'center' } }

export default Dialog
