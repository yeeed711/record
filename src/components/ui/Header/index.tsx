import { LoginForm, Modal } from '@components'
import styled, { css } from 'styled-components'
import { ICON } from '@constants'
import { mobile } from '@styles'
import MobileBtn from './MobileBtn'
import NavBar from './NavBar'
import type { ReactElement } from 'react'
import SearchBar from './SearchBar'
import { useState } from 'react'

const Header = (): ReactElement => {
  const [loginModalOpen, setLoginModalOpen] = useState(false)

  return (
    <>
      <HeaderWrapper>
        <HeaderLeft className="mobile-left">
          <ICON.LOGO />
          <NavBar />
        </HeaderLeft>
        <HeaderRight className="mobile-right">
          <SearchBar />
          <SignIn
            onClick={() => {
              setLoginModalOpen(true)
            }}>
            Sign in
          </SignIn>
          <Modal
            showModal={loginModalOpen}
            setShowModal={setLoginModalOpen}
            children={<LoginForm />}
          />
          <MobileBtn />
        </HeaderRight>
      </HeaderWrapper>
    </>
  )
}

export default Header

const FlexAlignCenter = css`
  display: flex;
  align-items: center;
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
  border: 1px solid ${props => props.theme.colors.border_02};
  color: ${props => props.theme.colors.text_03};
  font-size: 14px;
  &:hover {
    background-color: ${props => props.theme.colors.background_04};
  }
`
