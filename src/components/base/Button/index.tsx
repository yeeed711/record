import type { ReactElement, ReactNode } from 'react'
import styled from 'styled-components'

type ButtonPropsType = {
  children: ReactNode
  disabled: boolean
}

const Button = ({ disabled, children }: ButtonPropsType): ReactElement => {
  return <StyledButton disabled={disabled}>{children}</StyledButton>
}

export default Button

const StyledButton = styled.button`
  padding: 13px 20px;
  border-radius: 30px;
  border: 1px solid black;
  font-size: 14px;
  width: 100%;
`
