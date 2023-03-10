import { LoginForm } from '@components'
import Modal from '@base/Modal'
import type { ReactElement } from 'react'
import styled from 'styled-components'
import { useState } from 'react'

const Banner = (): ReactElement => {
  const [loginModal, setLoginModal] = useState(false)

  return (
    <>
      <StyledContainer>
        <div>생각하고, 기록하고, 성장하세요.</div>
        <BannerBtn
          onClick={() => {
            setLoginModal(true)
          }}>
          시작하기
        </BannerBtn>
      </StyledContainer>
      <Modal
        showModal={loginModal}
        setShowModal={setLoginModal}
        children={<LoginForm />}
      />
    </>
  )
}

export default Banner

const StyledContainer = styled.div`
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
