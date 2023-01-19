import { mobile } from '@styles'
import type { ReactElement } from 'react'
import styled from 'styled-components'

type InputPropsType = {
  id: string
  type: string
  register?: any
  placeholder: string
  labelTitle: string
}

const InputBox = ({
  id,
  type,
  placeholder,
  labelTitle,
  ...props
}: InputPropsType): ReactElement => {
  return (
    <Container>
      <Label htmlFor={id}>{labelTitle}</Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        {...props.register}
      />
    </Container>
  )
}

export default InputBox

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Label = styled.label`
  color: ${props => props.theme.colors.text_01};
  font-size: 14px;
`
const Input = styled.input`
  border-radius: 8px;
  padding: 13px 20px;
  border: 1px solid ${props => props.theme.colors.border_01};
  ${mobile} {
    font-size: 16px;
  }
`
