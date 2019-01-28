import styled from 'styled-components'

const Button = styled.button`
  font-family: 'Proxima Nova', sans-serif;
  font-size: ${props => {
    if (props.size === 'sm') return 14
    if (props.size === 'lg') return 18
    return 16
  }}px;
  font-weight: 600;
  text-align: center;
  border-radius: 128px;
  border: 0;
  outline: 0;
  cursor: pointer;
  padding: ${props => {
    if (props.size === 'sm') return '8px 12px'
    if (props.size === 'lg') return '16px 28px'
    return '12px 20px'
  }};
  transition: 200ms;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.15);
  background-color: ${props => (props.type === 'primary' ? '#01B6D1' : '#EAEAEA')};
  color: ${props => (props.type === 'primary' ? '#ffffff' : '#22282E')};
  &:hover {
    background-color: ${props => (props.type === 'primary' ? '#00C6E3' : '#F2F2F2')};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
  &:focus {
    box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.25);
  }
  &:focus:hover {
    box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.25);
    background-color: ${props => (props.type === 'primary' ? '#01B6D1' : '#EAEAEA')};
  }
  &:active,
  &:active:focus {
    background-color: ${props => (props.type === 'primary' ? '#00A2BB' : '#DDDDDD')};
  }
`

export default Button
