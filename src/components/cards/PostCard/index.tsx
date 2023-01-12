import { ICON } from '@constants'
import PostDetailCard from '../PostDetailCard'
import type { PostType } from '@types'
import type { ReactElement } from 'react'
import styled from 'styled-components'
import { useState } from 'react'

type PropsType = { post: PostType }

const PostCard = ({ post }: PropsType): ReactElement => {
  const [isPostModalOpened, setIsPostModalOpened] = useState(false)

  const handlePostModalOpen = (): void => {
    setIsPostModalOpened(prev => !prev)
  }

  return (
    <>
      <Card onClick={handlePostModalOpen}>
        <Wrapper>
          {post.image === '' ? null : (
            <ThumbnailWrapper>
              <a href="#">
                <ThumbnailImg src={post.image} alt="이미지썸네일" />
              </a>
            </ThumbnailWrapper>
          )}
          <ContentsWrapper>
            <a href="#">
              {/* <ContentsTitle>
              안녕하세요 만약 제목이 엄청나게 길어진다면 어떻게 되는 걸까요?
              궁금하지않나요?
            </ContentsTitle> */}
              <ContentsDes>{post.content}</ContentsDes>
            </a>
          </ContentsWrapper>
          <ProfileContainer>
            <ProfileLeft>
              <ProfileImg src={post.author.image} alt="프로필사진" />
              <ProfileName>{post.author.username}</ProfileName>
            </ProfileLeft>
            <ProfileRight>
              <LikedWrapper>
                <ICON.THUMBS_UP />
                <span>{post.heartCount}</span>
              </LikedWrapper>
              <CommentWrapper>
                <ICON.CHAT />
                <span>{post.commentCount}</span>
              </CommentWrapper>
            </ProfileRight>
          </ProfileContainer>
        </Wrapper>
      </Card>

      {isPostModalOpened && (
        <PostDetailCard setIsPostModalOpened={setIsPostModalOpened} />
      )}
    </>
  )
}

export default PostCard

const Card = styled.li`
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 4%) 0px 6px 12px 0px;
  transition: all 0.5s;
  &:hover {
    box-shadow: 0 6px 12px 0 rgb(0 0 0 / 16%);
    transform: translateY(-8px);
  }
  height: 100%;
  overflow: hidden;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`

const ThumbnailWrapper = styled.div``
const ThumbnailImg = styled.img`
  height: 200px;
`

const ContentsWrapper = styled.div`
  padding: 15px 15px 0 15px;
`

const ContentsTitle = styled.strong`
  font-weight: 700;
  font-size: 18px;
  display: block;
  margin-bottom: 15px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`
const ContentsDes = styled.p`
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-break: keep-all;
  font-size: 14px;
  line-height: 1.4;
`
const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`

const ProfileLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

const ProfileImg = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`

const ProfileName = styled.span`
  font-size: 12px;
`
const ProfileRight = styled.div`
  display: flex;
  gap: 5px;
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
