import type { AuthorType, PostCommentsType, PostDetailType } from '@data'
import { postCommentsResquester, postDetailResquester } from '@api'
import { useEffect, useState } from 'react'
import { Author } from '@base'
import { CommentForm } from '@components'
import { ICON } from '@constants'
import type { ReactElement } from 'react'
import styled from 'styled-components'

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

  const getCreateAt = (time: string): string => {
    const commentDate = Date.parse(time)
    const koDtf = new Intl.DateTimeFormat('ko', { dateStyle: 'long' })
    const now = Date.now()
    const commentMin = Math.floor((now - commentDate) / 1000 / 60)
    const commentHour = Math.floor((now - commentDate) / 1000 / 60 / 60)
    const commentDay = Math.floor((now - commentDate) / 1000 / 60 / 60 / 24)

    if (commentMin < 1) {
      return '방금 전'
    } else if (commentMin < 60) {
      return `약 ${commentMin}분 전`
    } else if (25 > commentHour && 0 < commentHour) {
      return `약 ${commentHour}시간 전`
    } else if (7 >= commentDay && commentDay > 0 && commentDay !== 0) {
      return `${commentDay}일 전`
    } else {
      return koDtf.format(commentDate)
    }
  }

  //최적화 필요
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
                  children={postContent.author.username}
                />
              </BlogBtn>
            </ContentNav>
            <ContentWrapper>
              <AuthorWrapper>
                <Author
                  src={authorInfo.image}
                  children={postContent.author.username}
                />
                <CreatedAt>{getCreateAt(postContent.createdAt)}</CreatedAt>
              </AuthorWrapper>
              <Hr />
              <Content>{postContent.content}</Content>
              <LikedWrapper>
                <LikedIcon>
                  <ICON.HEART />
                </LikedIcon>
                <span>
                  {postContent.heartCount}명이 이 게시글을 좋아합니다.
                </span>
              </LikedWrapper>
              <CommontBoxWrapper>
                <CommentCount>{postContent.commentCount}개의 댓글</CommentCount>
                <CommentForm postId={postId} />
                <ul>
                  {postComments &&
                    postComments
                      .map(comment => (
                        <div key={comment.id}>
                          <AuthorWrapper>
                            <Author src={comment.author.image}>
                              {comment.author.username}
                            </Author>
                            <CreatedAt>
                              {getCreateAt(comment.createdAt)}
                            </CreatedAt>
                          </AuthorWrapper>
                          <Comment>{comment.content}</Comment>
                        </div>
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
  margin-top: 2px;
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
const Content = styled.div`
  margin-bottom: 100px;
`
const CommontBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const LikedWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 20px 0;
`
const LikedIcon = styled.div`
  width: fit-content;
  height: fit-content;
  background-color: ${props => props.theme.colors.background_05};
  font-size: 13px;
  padding: 5px;
  border-radius: 50%;
  cursor: pointer;
  svg {
    fill: #adb6bd;
    stroke: #adb6bd;
    margin: 3px 3px 0 3px;
  }
  &:hover {
    svg {
      fill: black;
      stroke: black;
    }
    outline: 1px solid black;
  }
`

const Comment = styled.li`
  padding: 8px 0 20px 25px;
  font-size: 13px;
  white-space: pre-wrap;
  border-bottom: 1px solid ${props => props.theme.colors.border_03};
  margin-bottom: 20px;
  line-height: 1.4;
`

const CommentCount = styled.h3`
  margin-bottom: 15px;
  font-size: 14px;
  font-weight: 700;
`
