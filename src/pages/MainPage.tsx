import { Footer, Header } from '@components'
import type { ReactElement } from 'react'
import styled from 'styled-components'

const MainPage = (): ReactElement => {
  return (
    <>
      <Layout>
        <Header />
        <Content>메인페이지</Content>
        <Footer />
      </Layout>
    </>
  )
}

export default MainPage

const Layout = styled.div`
  position: relative;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.background_02};
`

const Content = styled.div`
  flex: 1;
`
