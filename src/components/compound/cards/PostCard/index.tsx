import { Author, Modal } from '@base'
import { ICON } from '@constants'
import PostDetailCard from '../PostDetailCard'
import type { PostType } from '@models'
import type { ReactElement } from 'react'
import styled from 'styled-components'
import { useState } from 'react'

type PropsType = { post: PostType }

const PostCard = ({ post }: PropsType): ReactElement => {
  const [isPostModalOpened, setIsPostModalOpened] = useState(false)
  const [heartCount, setHeartCount] = useState(post.heartCount)

  return (
    <>
      <Card
        onClick={() => {
          setIsPostModalOpened(true)
        }}>
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
            <Author src={post.author.image} children={post.author.username} />
            <CommontBoxWrapper>
              <LikedWrapper>
                <ICON.HEART />
                <span>{heartCount}</span>
              </LikedWrapper>
              <CommentWrapper>
                <ICON.CHAT />
                <span>{post.commentCount}</span>
              </CommentWrapper>
            </CommontBoxWrapper>
          </ProfileContainer>
        </Wrapper>
      </Card>
      <Modal
        showModal={isPostModalOpened}
        setShowModal={setIsPostModalOpened}
        children={
          <PostDetailCard
            post={post}
            setHeartCount={setHeartCount}
            postHeartCount={heartCount}
          />
        }
      />
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
  background-color: ${props => props.theme.colors.background_01};
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
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-break: keep-all;
  font-size: 14px;
  line-height: 1.4;
  white-space: pre-wrap;
`
const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`

const CommontBoxWrapper = styled.div`
  display: flex;
  gap: 5px;
`
const LikedWrapper = styled.div`
  display: flex;
  gap: 2px;
  font-size: 13px;
  color: ${props => props.theme.colors.border_04};
  svg {
    fill: white;
    stroke: #adb6bd;
  }
  span {
    margin: 2px 0 0 2px;
  }
`
const CommentWrapper = styled(LikedWrapper)``
