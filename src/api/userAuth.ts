import axios from 'axios'

interface IForm {
  email: string
  password: string
}

// TODO: 상수분리
const API_KEY = process.env.REACT_APP_API_BASE_URL

export const loginAxios = async (userInfo: IForm): Promise<any> => {
  try {
    const response = await axios.post(`${API_KEY}/user/login`, {
      user: {
        email: userInfo.email,
        password: userInfo.password
      }
    })
    console.log('로그인성공', response.data)
    return response.data
  } catch (error) {
    return '?'
  }
}
