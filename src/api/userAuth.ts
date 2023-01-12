import { defaultInstance } from './utils'
import { PATH } from '@constants'

type LoginFormType = {
  email: string
  password: string
}

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
