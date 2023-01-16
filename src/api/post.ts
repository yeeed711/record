import { authInstance } from './instance'
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
export const postDetailResquester = async (postId: string): Promise<any> => {
  try {
    const response = await authInstance.get(`${PATH.POST}/${postId}`)
    console.log('게시글 상세보기')
    return response.data
  } catch (error) {
    return '게시글 상세보기를 실패하였습니다.'
  }
}

// 댓글 리스트
export const postCommentsResquester = async (postId: string): Promise<any> => {
  try {
    const response = await authInstance.get(`${PATH.POST}/${postId}/comments`)
    console.log('댓글 리스트 불러오기')
    return response.data
  } catch (error) {
    return '댓글 리스트 불러오기를 실패하였습니다.'
  }
}
