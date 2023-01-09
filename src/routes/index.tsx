import { Route, Routes } from 'react-router-dom'
import MainPage from '@pages/MainPage'
import type { ReactElement } from 'react'

const Router = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  )
}

export default Router
