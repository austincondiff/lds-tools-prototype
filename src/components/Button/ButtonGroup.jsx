import styled from 'styled-components'
import Button from './Button'
import { IconBtn } from './IconButton'

const ButtonGroup = styled.div`
  margin: 0 -4px;
  display: inline-flex;
  align-items: center;
  & ${Button} {
    margin: 0 4px;
  }
`

export default ButtonGroup
