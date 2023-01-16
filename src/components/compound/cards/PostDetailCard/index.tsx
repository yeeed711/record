import type { AuthorType, PostCommentsType, PostDetailType } from '@data'
import { postCommentsResquester, postDetailResquester } from '@api'
import { useEffect, useState } from 'react'
import { Author } from '@base'
import { ICON } from '@constants'
import type { ReactElement } from 'react'
import styled from 'styled-components'
// 포스트카드 디테일 끝내기
// 포스트 업로드 개발
//CommontBoxWrapper 모듈분리

type PostDetailCardType = {
  setIsPostModalOpened: React.Dispatch<React.SetStateAction<boolean>>
  postId: string
  authorInfo: AuthorType
}

const PostDetailCard = ({
  setIsPostModalOpened,
  postId,
  authorInfo
}: PostDetailCardType): ReactElement => {
  const [postContent, setPostContent] = useState<PostDetailType>()
  const [postComments, setPostComments] = useState<PostCommentsType>()
  const handleClosedModal = (): void => {
    setIsPostModalOpened(prev => !prev)
  }

  // utils 함수 분리하기
  const getPostCreateAt = (time: string): string => {
    const postDate = Date.parse(time)
    const koDtf = new Intl.DateTimeFormat('ko', { dateStyle: 'long' })
    return koDtf.format(postDate)
  }

  const getCommentCreateAt = (time: string): string => {
    const commentDate = Date.parse(time)
    const koDtf = new Intl.DateTimeFormat('ko', { dateStyle: 'long' })
    const now = Date.now()
    const commentMin = Math.floor((now - commentDate) / 1000 / 60)
    const commentHour = Math.floor((now - commentDate) / 1000 / 60 / 60)
    const commentDay = Math.floor((now - commentDate) / 1000 / 60 / 60 / 24)

    if (commentMin < 1) {
      return '방금 전'
    } else if (commentMin < 60) {
      return `${commentMin}분 전`
    } else if (25 > commentHour && 0 < commentHour) {
      return `${commentHour}시간 전`
    } else if (7 >= commentDay && commentDay > 0 && commentDay !== 0) {
      return `${commentDay}일 전`
    } else {
      return koDtf.format(commentDate)
    }
  }

  useEffect(() => {
    const postDetailData = async (): Promise<void> => {
      const { post } = await postDetailResquester(postId)
      setPostContent(post)
    }

    const postCommentData = async (): Promise<void> => {
      const { comments } = await postCommentsResquester(postId)
      console.log(comments)
      setPostComments(comments)
    }

    postDetailData()
    postCommentData()
  }, [])

  return (
    <StyledContainer>
      <Wrapper>
        {postContent && (
          <>
            <ContentNav>
              <BackBtn>
                <ICON.CHEVRON_LEFT />
                <span>뒤로가기</span>
              </BackBtn>
              <BlogBtn>
                <Author
                  src={authorInfo.image}
                  alt="프로필 이미지"
                  children={postContent.author.username}
                />
              </BlogBtn>
            </ContentNav>
            <ContentWrapper>
              <AuthorWrapper>
                <Author
                  src={authorInfo.image}
                  alt="프로필 이미지"
                  children={postContent.author.username}
                />
                <CreatedAt>{getPostCreateAt(postContent.createdAt)}</CreatedAt>
              </AuthorWrapper>
              <Hr />
              <div>{postContent.content}</div>
              <CommontBoxWrapper>
                <LikedCommentIcons>
                  <LikedWrapper>
                    <ICON.THUMBS_UP />
                    <span>
                      {postContent.heartCount}명이 이 게시글을 좋아합니다.
                    </span>
                  </LikedWrapper>
                  <CommentWrapper>
                    <ICON.CHAT />
                    <span>{postContent.commentCount}개의 댓글</span>
                  </CommentWrapper>
                </LikedCommentIcons>
                <Hr />
                <ul>
                  {postComments &&
                    postComments
                      .map(comment => (
                        <>
                          <AuthorWrapper>
                            <Author
                              src={comment.author.image}
                              alt="프로필 이미지">
                              {comment.author.username}
                            </Author>
                            <CreatedAt>
                              {getCommentCreateAt(comment.createdAt)}
                            </CreatedAt>
                          </AuthorWrapper>
                          <Comment>{comment.content}</Comment>
                        </>
                      ))
                      .reverse()}
                </ul>
              </CommontBoxWrapper>
            </ContentWrapper>
          </>
        )}
      </Wrapper>
      <ClosedBtn onClick={handleClosedModal}>
        <ICON.CLOSE />
      </ClosedBtn>
    </StyledContainer>
  )
}

export default PostDetailCard

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;
`
const Wrapper = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 90vh;
  background-color: white;
  padding: 10px;
  border-radius: 8px;
  max-width: 780px;
  width: 100%;
  margin: 0 auto;
`

const ContentNav = styled.div`
  display: flex;
  justify-content: space-between;
`

const BackBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 4px 6px;
  font-size: 13px;
  color: ${props => props.theme.colors.text_04};
  &:hover {
    background-color: ${props => props.theme.colors.background_05};
    border-radius: 8px;
  }
`
const BlogBtn = styled(BackBtn)``

const ContentWrapper = styled.div`
  overflow: hidden scroll;
  padding: 30px 50px;
  color: ${props => props.theme.colors.text_04};
  font-size: 14px;
`

const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const CreatedAt = styled.span`
  font-size: 12px;
  color: ${props => props.theme.colors.text_05};
`
const ClosedBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  svg {
    stroke: white;
  }
  background-color: transparent;
`
const Hr = styled.div`
  border-top: 1px solid ${props => props.theme.colors.border_01};
  height: 1px;
  margin: 20px 0;
`

const CommontBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const LikedCommentIcons = styled.div`
  display: flex;
  gap: 10px;
`

const LikedWrapper = styled.div`
  display: flex;
  gap: 2px;
  font-size: 14px;
  span {
    margin-top: 2px;
  }
`
const CommentWrapper = styled(LikedWrapper)``

const Comment = styled.li`
  padding: 8px 0 20px 25px;
  font-size: 13px;
`
