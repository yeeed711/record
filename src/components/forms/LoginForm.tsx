import Button from '@components/base/Button'
import { ICON } from '@constants'
import InputBox from '@components/base/Input'
import { loginAxios } from '@api'
import type { ReactElement } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'

//type
interface IForm {
  email: string
  password: string
}

interface ILoginFormProps {
  setIsSignUpModalOpened: React.Dispatch<React.SetStateAction<boolean>>
}

const LoginForm = ({
  setIsSignUpModalOpened
}: ILoginFormProps): ReactElement => {
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

  const handleClosedModal = (): void => {
    setIsSignUpModalOpened(prev => !prev)
  }
  return (
    <Container>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className="modal">
        <FormWrapper>
          <FormTitle className="ir">로그인 화면 입니다.</FormTitle>
          <Description>
            <ICON.LOGO />
            <span>성장을 기록해 보세요.</span>
            <span>
              무엇이든 기록하다보면 <br />
              성장한 자신을 발견할수 있어요.
            </span>
          </Description>
          <InputBox
            labelTitle="이메일"
            id="email"
            type="text"
            placeholder="이메일을 입력해주세요."
            register={register('email', {
              pattern: {
                message: '*이메일 형식이 올바르지 않습니다.',
                value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
              },
              required: '*이메일이 입력되지 않았습니다.'
            })}
          />
          <span>{errors.email?.message}</span>
          <InputBox
            labelTitle="비밀번호"
            id="password"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            register={register('password', {
              minLength: {
                message: '*비밀번호는 6자 이상이어야 합니다.',
                value: 6
              },
              required: true
            })}
          />

          <span>{errors.password?.message}</span>
          <Button disabled={!isValid}>로그인</Button>
          <span>
            가입시 개인정보 처리방침과 이용약관을 확인 및 동의한 것으로
            간주합니다.
          </span>
        </FormWrapper>
      </Form>
      <ClosedBtn onClick={handleClosedModal}>
        <ICON.CLOSE />
      </ClosedBtn>
    </Container>
  )
}

export default LoginForm

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;
`
const Form = styled.form`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 350px;
  background-color: white;
  padding: 30px 15px;
  border-radius: 8px;
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
`
const FormTitle = styled.h2``
const ClosedBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  svg {
    stroke: white;
  }
  /* background-color: transparent; */
`
