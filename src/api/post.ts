import { authInstance } from './utils'
import { PATH } from '@constants'

//나의 게시글 목록
export const userPostResquester = async (accountName: string): Promise<any> => {
  try {
    const response = await authInstance.get(
      `${PATH.POST}/${accountName}/userpost`
    )
    console.log('나의 게시글 불러오기')
    return response.data
  } catch (error) {
    return '게시글 불러오기를 실패하였습니다.'
  }
}

//게시글 상세
export const postDetailResquester = async (
  accountName: string
): Promise<any> => {
  try {
    const response = await authInstance.get(`${PATH.POST}/${accountName}`)
    console.log('게시글 상세보기')
    return response.data
  } catch (error) {
    return '게시글 상세보기를 실패하였습니다.'
  }
}
