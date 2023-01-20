import { mobile } from '@styles'
import type { ReactElement } from 'react'
import styled from 'styled-components'

type InputPropsType = {
  id: string
  type: string
  register?: any
  placeholder: string
  labelTitle?: string
  errorMsg?: string
}

const InputBox = ({
  id,
  type,
  placeholder,
  labelTitle,
  errorMsg,
  ...props
}: InputPropsType): ReactElement => {
  return (
    <Container>
      <Label htmlFor={id}>{labelTitle}</Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        autoComplete="off"
        {...props.register}
      />
      <ErrorMsg>{errorMsg}</ErrorMsg>
    </Container>
  )
}

export default InputBox

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  color: ${({ theme }) => theme.colors.text_01};
  font-size: 13px;
  margin-bottom: 10px;
`
const Input = styled.input`
  border-radius: 8px;
  padding: 13px 20px;
  border: 1px solid ${({ theme }) => theme.colors.border_01};
  color: ${({ theme }) => theme.colors.text_04};
  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.border_02};
    background-color: #e9f8efaf;
  }
  &::placeholder {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.text_05};
  }
  ${mobile} {
    font-size: 16px;
  }
`
const ErrorMsg = styled.span`
  font-size: 12px;
  color: ${props => props.theme.colors.red};
  padding-left: 5px;
  margin-top: 10px;
`
