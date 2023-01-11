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
const Header = styled.div``
const Content = styled.div`
  flex: 1;
`
const Footer = styled.div``