import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '@views/HomePage'
import type { ReactElement } from 'react'

const Router = (): ReactElement => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
