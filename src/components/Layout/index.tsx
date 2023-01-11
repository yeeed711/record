import type { ReactElement } from 'react'
import styled from 'styled-components'

interface LayoutProps {
  header: any
  content: any
  footer: any
}

const Layout = ({ header, content, footer }: LayoutProps): ReactElement => {
  return (
    <Container>
      <Header>{header}</Header>
      <Content>{content}</Content>
      <Footer>{footer}</Footer>
    </Container>
  )
}

export default Layout

const Container = styled.div`
  position: relative;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.background_02};
`
const Header = styled.div`
  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 3%);
  padding: 5px 15px;
  position: sticky;
  top: 0;
  background-color: ${props => props.theme.colors.background_01};
  z-index: 10;
`
const Content = styled.div`
  flex: 1;
`
const Footer = styled.div``
