import styled, { css } from 'styled-components'
import { ICON } from '@constants'
import { mobile } from '@styles'
import MobileBtn from './MobileBtn'
import NavBar from './NavBar'
import type { ReactElement } from 'react'
import SearchBar from './SearchBar'
// import { useState } from 'react'

const Header = (): ReactElement => {
  return (
    <>
      <HeaderContainer>
        <HeaderWrapper>
          <HeaderLeft className="mobile-left">
            <ICON.LOGO />
            <NavBar />
          </HeaderLeft>
          <HeaderRight className="mobile-right">
            <SearchBar />
            <SignIn>Sign in</SignIn>
            <MobileBtn />
          </HeaderRight>
        </HeaderWrapper>
      </HeaderContainer>
    </>
  )
}

export default Header

const FlexAlignCenter = css`
  display: flex;
  align-items: center;
`
const HeaderContainer = styled.div`
  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 3%);
  padding: 5px 15px;
  position: sticky;
  top: 0;
  background-color: ${props => props.theme.colors.background_01};
`
const HeaderWrapper = styled.div`
  ${FlexAlignCenter}
  height: 46px;
  justify-content: space-between;
  max-width: 1060px;
  width: 100%;
  margin: 0 auto;
  .mobile-left {
    ${mobile} {
      a {
        display: none;
      }
    }
  }
  .mobile-right > form {
    ${mobile} {
      display: none;
    }
  }
`

const HeaderLeft = styled.div`
  ${FlexAlignCenter}
  gap: 20px;
  svg {
    margin-right: 60px;
  }
`

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`

const SignIn = styled.button`
  padding: 7px 15px;
  border-radius: 30px;
  border: 1px solid black;
  font-size: 14px;
`
