import { EmailForm } from '@components'
import type { ReactElement } from 'react'

const SignInPage = (): ReactElement => {
  return (
    <div>
      <h1>회원가입 페이지 입니다.</h1>
      <EmailForm />
    </div>
  )
}

export default SignInPage
