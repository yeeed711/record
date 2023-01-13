import { DefaultLayout, Feed, Footer, Header } from '@components'

import type { ReactElement } from 'react'

const HomePage = (): ReactElement => {
  return (
    <DefaultLayout header={<Header />} content={<Feed />} footer={<Footer />} />
  )
}

export default HomePage
