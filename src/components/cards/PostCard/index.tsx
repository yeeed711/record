import { ICON } from '@constants'
import type { ReactElement } from 'react'
import styled from 'styled-components'

const PostCard = (): ReactElement => {
  return (
    <Card>
      <Wrapper>
        <ThumbnailWrapper>
          <a href="#">
            <ThumbnailImg
              src="./assets/images/banner.png"
              alt="이미지썸넬공간"
            />
          </a>
        </ThumbnailWrapper>
        <ContentsWrapper>
          <a href="#">
            <ContentsTitle>
              안녕하세요 만약 제목이 엄청나게 딜어진다면 어떻게 되는 걸까요?
              궁금하지않나요?
            </ContentsTitle>
            <ContentsDes>
              저는 어제 영화를 봤습니다. 바로 카사블랑카인데요. 카사노바라는
              단어와 유사하여 비슷한 의미인 줄 알았는데, 알고보니 모로코의 지역
              이름이었습니다. 잘못 생각하고 있었단걸 알고 놀랐습니다. 영화는
              1943년 영화임에도 불구하고 세련된 느낌이 묻어나오더라구요. 재미가
              있었습니다
            </ContentsDes>
          </a>
        </ContentsWrapper>
        <ProfileContainer>
          <ProfileLeft>
            <ProfileImg src="./assets/images/banner.png" alt="프로필사진" />
            <ProfileName>김예지</ProfileName>
          </ProfileLeft>
          <ProfileRight>
            <LikedWrapper>
              <ICON.THUMBS_UP />
              <span>7</span>
            </LikedWrapper>
            <ComentWrapper>
              <ICON.CHAT />
              <span>11</span>
            </ComentWrapper>
          </ProfileRight>
        </ProfileContainer>
      </Wrapper>
    </Card>
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
const Wrapper = styled.div``

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
  align-items: flex-end;
  gap: 2px;
  font-size: 14px;
  span {
    text-align: end;
  }
`
const ComentWrapper = styled(LikedWrapper)``
