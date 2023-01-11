import { loginAxios } from '@api'
import type { ReactElement } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

interface IForm {
  email: string
  password: string
}
const Content = (): ReactElement => {
  const [isSignUpModalOpened, setIsSignUpModalOpened] = useState(false)

  const handleSignUpModalOpen = (): void => {
    setIsSignUpModalOpened(prev => !prev)
  }

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid }
  } = useForm<IForm>({ mode: 'onChange' })

  const onSubmit = (userInfo: IForm): void => {
    if (isValid) {
      //로그인 로직
      //TODO: 로컬스토리지 저장
      loginAxios(userInfo)
    }
  }

  return (
    <div>
      <Banner>
        <div>무엇이든 기록해보세요</div>
        <BannerBtn onClick={handleSignUpModalOpen}>시작하기</BannerBtn>
      </Banner>
      <div>안녕하세요 반갑습니다</div>
      <div>포스트</div>
      <div>포스트</div>
      <div>포스트</div>
      <div>포스트</div>
      <div>포스트</div>
      <div>포스트</div>
      {isSignUpModalOpened && (
        <div>
          로그인모달임
          <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <div>로그인입니다</div>
            <label htmlFor="email"></label>
            <input
              placeholder="이메일을 입력해주세요"
              {...register('email', {
                pattern: {
                  message: '*이메일 형식이 올바르지 않습니다.',
                  value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
                },
                required: '*이메일이 입력되지 않았습니다.'
              })}
            />
            <span>{errors.email?.message}</span>
            <label htmlFor="pw"></label>
            <input
              placeholder="비밀번호를 입력해주세요"
              {...register('password', {
                minLength: {
                  message: '*비밀번호는 6자 이상이어야 합니다.',
                  value: 6
                },
                required: true
              })}
            />
            <span>{errors.password?.message}</span>
            <button disabled={!isValid}>로그인</button>
          </form>
        </div>
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
  color: inherit;
  background-color: lightblue;
  border-radius: 18px;
`
