import { Content, Footer, Header, Layout } from '@components'
import type { ReactElement } from 'react'

const MainPage = (): ReactElement => {
  return (
    <>
      <Layout header={<Header />} content={<Content />} footer={<Footer />} />
    </>
  )
}

export default MainPage
