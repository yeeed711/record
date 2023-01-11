import { Link } from 'react-router-dom'
import type { ReactElement } from 'react'
import styled from 'styled-components'

const NavBar = (): ReactElement => {
  return (
    <>
      <LinkStyled to="#">About</LinkStyled>
      <LinkStyled to="#">About</LinkStyled>
      <LinkStyled to="#">About</LinkStyled>
    </>
  )
}

export default NavBar

const LinkStyled = styled(Link)`
  /* background-color: #eee; */
  padding: 5px 10px;
  border-radius: 10px;
  transition: all 0.3s;
  &:hover {
    background-color: #eee;
    color: ${props => props.theme.colors.text_03};
  }
`
