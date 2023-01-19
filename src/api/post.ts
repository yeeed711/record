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

// 댓글 작성
export const postCommentWriteResquester = async (
  postId: string,
  commentValue: string
): Promise<any> => {
  try {
    const response = await authInstance.post(
      `${PATH.POST}/${postId}/comments`,
      {
        comment: {
          content: commentValue
        }
      }
    )
    console.log('댓글 작성 완료')
    return response.data
  } catch (error) {
    return '댓글 작성을 실패하였습니다.'
  }
}

// 포스트 좋아요
export const postLikedResquester = async (postId: string): Promise<any> => {
  try {
    const response = await authInstance.post(`${PATH.POST}/${postId}/heart`)
    console.log('좋아요 요청 성공')
    return response.data
  } catch (error) {
    return '좋아요 저장을 실패하였습니다.'
  }
}

// 포스트 좋아요 취소
export const postUnLikedResquester = async (postId: string): Promise<any> => {
  try {
    const response = await authInstance.delete(`${PATH.POST}/${postId}/unheart`)
    console.log('좋아요 취소 요청 성공')
    return response.data
  } catch (error) {
    return '좋아요 취소를 실패하였습니다.'
  }
}
