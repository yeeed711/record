import { ICON } from '@constants'
import { mobile } from '@styles'
import type { ReactElement } from 'react'
import styled from 'styled-components'

const Footer = (): ReactElement => {
  return (
    <footer>
      <Wrapper>
        <FooterTop>
          <Left>
            <ICON.LOGO />
            <MenuList>
              <a
                href="https://github.com/yeeed711"
                target="_blank"
                rel="noopener noreferrer">
                소개
              </a>
              <a
                href="https://github.com/yeeed711"
                target="_blank"
                rel="noopener noreferrer">
                이용약관
              </a>
              <a
                href="https://github.com/yeeed711"
                target="_blank"
                rel="noopener noreferrer">
                개인정보 처리방침
              </a>
              <a
                href="https://github.com/yeeed711"
                target="_blank"
                rel="noopener noreferrer">
                문의
              </a>
            </MenuList>
          </Left>
          <Right>
            <ICON.GITHUB />
            <ICON.GITHUB />
          </Right>
        </FooterTop>
        <FooterBottom>
          <span>Copyright 2023. yeeed All rights reserved.</span>
          <span>
            Powerd by{' '}
            <a
              href="https://github.com/yeeed711"
              target="_blank"
              rel="noopener noreferrer">
              yeeed
            </a>{' '}
            | korean
          </span>
        </FooterBottom>
      </Wrapper>
    </footer>
  )
}

export default Footer

const Wrapper = styled.div`
  padding: 40px 10px;
  max-width: 1060px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.colors.text_01};
  a {
    &:hover {
      color: black;
    }
  }
  ${mobile} {
    padding: 10px;
  }
`

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  svg {
    margin-right: 60px;
  }
`
const Right = styled.div`
  display: flex;
  gap: 15px;
  svg {
    stroke: #868e96;
    &:hover {
      cursor: pointer;
    }
  }
`
const MenuList = styled.div`
  display: flex;
  gap: 15px;
  font-size: 13px;
  ${mobile} {
    display: none;
  }
`

const FooterBottom = styled.div`
  padding: 20px 0;
  border-top: 1px solid ${props => props.theme.colors.border_01};
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  ${mobile} {
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }
`
