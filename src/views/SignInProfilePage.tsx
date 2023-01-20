import { ProfileForm } from '@components'
import type { ReactElement } from 'react'

const SignInProfilePage = (): ReactElement => {
  return (
    <div>
      <h1>회원가입, 프로필설정</h1>
      <ProfileForm />
    </div>
  )
}

export default SignInProfilePage
