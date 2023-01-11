import LoginForm from '@components/forms/LoginForm' // TODO: 폴더구조 정리
import { mobile } from '@styles'
import PostCard from '@components/cards/PostCard'
import type { ReactElement } from 'react'
import styled from 'styled-components'
import { useState } from 'react'

const Content = (): ReactElement => {
  const [isSignUpModalOpened, setIsSignUpModalOpened] = useState(false)

  const handleSignUpModalOpen = (): void => {
    setIsSignUpModalOpened(prev => !prev)
  }

  return (
    <div>
      <Banner>
        <div>생각하고, 기록하고, 성장하세요.</div>
        <BannerBtn onClick={handleSignUpModalOpen}>시작하기</BannerBtn>
      </Banner>
      <div>안녕하세요 반갑습니다</div>
      <div>카테고리</div>
      <Cards>
        <PostCard />
      </Cards>

      {isSignUpModalOpened && (
        <LoginForm setIsSignUpModalOpened={setIsSignUpModalOpened} />
      )}
    </div>
  )
}

export default Content

const Banner = styled.div`
  background-color: black;
  height: 280px;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: 700;
  background-image: url('/assets/images/banner.png');
  background-size: cover;
  background-position: center;
`

const BannerBtn = styled.button`
  padding: 8px 20px;
  color: ${props => props.theme.colors.text_03};
  background-color: ${props => props.theme.colors.background_04};
  border-radius: 18px;
  border: 2px solid ${props => props.theme.colors.primary};
  font-size: 14px;
`
const Cards = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 25px;
  padding: 30px 10px;
  max-width: 1060px;
  width: 100%;
  margin: 0 auto;
  ${mobile} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  //TODO: 미디어쿼리 분기점 추가하기
  @media (max-width: 640px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`
