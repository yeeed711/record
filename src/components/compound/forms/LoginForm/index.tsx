import { Button, InputBox } from '@base'
import { ICON } from '@constants'
import { loginResquester } from '@api'
import type { ReactElement } from 'react'
import { setItem } from '@utils'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'

//type

type FormType = {
  email: string
  password: string
}

const LoginForm = (): ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<FormType>({ mode: 'onChange' })

  const onSubmit = async (userInfo: FormType): Promise<void> => {
    if (isValid) {
      const { user } = await loginResquester(userInfo)
      setItem('userInfo', user)
    }
  }

  return (
    <>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className="modal">
        <FormTitle className="ir">로그인 화면 입니다.</FormTitle>
        <Description>
          <ICON.LOGO />
          <span>성장을 기록해 보세요.</span>
          <span>
            무엇이든 기록하다보면 <br />
            성장한 자신을 발견할 수 있어요.
          </span>
        </Description>
        <InputBox
          labelTitle="이메일"
          id="email"
          type="text"
          placeholder="이메일을 입력해주세요."
          register={register('email', {
            pattern: {
              message: '* 이메일 형식이 올바르지 않습니다.',
              value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
            },
            required: true
          })}
        />
        <ErrorMsg>{errors.email?.message}</ErrorMsg>
        <InputBox
          labelTitle="비밀번호"
          id="password"
          type="password"
          placeholder="비밀번호를 입력해주세요."
          register={register('password', {
            minLength: {
              message: '* 비밀번호는 6자 이상이어야 합니다.',
              value: 6
            },
            required: true
          })}
        />
        <ErrorMsg>{errors.password?.message}</ErrorMsg>
        <Button disabled={!isValid}>로그인</Button>
        <InfoTxt>
          가입시 개인정보 처리방침과 이용약관을 확인 및 동의한 것으로
          간주합니다.
        </InfoTxt>
      </Form>
    </>
  )
}

export default LoginForm

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 350px;
  background-color: white;
  padding: 30px 15px;
  border-radius: 8px;
  margin: 0 auto;
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
  span {
    text-align: center;
    line-height: 1.4;
  }
`
const FormTitle = styled.h2``
const ClosedBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  svg {
    stroke: white;
  }
  background-color: transparent;
`

const ErrorMsg = styled.span`
  font-size: 12px;
  color: ${props => props.theme.colors.red};
  padding-left: 5px;
`

const InfoTxt = styled.span`
  display: block;
  text-align: center;
  font-size: 10px;
  margin-top: 10px;
  padding-left: 5px;
  color: ${props => props.theme.colors.text_01};
`
