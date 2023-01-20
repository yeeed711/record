import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '@views/HomePage'
import type { ReactElement } from 'react'
import SignInPage from '@views/SignInPage'
import SignInProfilePage from '@views/SignInProfilePage'

const Router = (): ReactElement => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signin/profile" element={<SignInProfilePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
