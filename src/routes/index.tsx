import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from '@pages/MainPage'
import type { ReactElement } from 'react'

const Router = (): ReactElement => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
