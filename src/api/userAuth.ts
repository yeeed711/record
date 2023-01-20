import { defaultInstance } from './instance'
import { PATH } from '@constants'

type LoginFormType = {
  email: string
  password: string
}

// 로그인
export const loginResquester = async (
  userInfo: LoginFormType
): Promise<any> => {
  try {
    const response = await defaultInstance.post(PATH.LOGIN, {
      user: {
        email: userInfo.email,
        password: userInfo.password
      }
    })
    console.log('로그인성공')
    return response.data
  } catch (error) {
    return '로그인에 실패하였습니다.'
  }
}

// 유저 이메일 검증
export const emailValidResquester = async (
  userEmail: string
): Promise<string> => {
  try {
    const response = await defaultInstance.post(PATH.EMAILVALID, {
      user: {
        email: userEmail
      }
    })
    console.log(response.data)
    return response.data.message
  } catch (error) {
    return '이메일 검증을 실패했습니다.'
  }
}
