import React from 'react'
import classNames from 'classnames'

export function cloneElementWithClassName(child, className) {
  return React.cloneElement(child, {
    className: classNames(child.props.className, className)
  })
}

export function cloneChildrenWithClassName(children, className) {
  return React.Children.map(children, child => React.isValidElement(child) && cloneElementWithClassName(child, className))
}

export function setRef(ref, value) {
  if (typeof ref === 'function') {
    ref(value)
  } else if (ref) {
    ref.current = value
  }
}
