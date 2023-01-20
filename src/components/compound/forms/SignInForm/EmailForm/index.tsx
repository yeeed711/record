import { Button, InputBox } from '@base'
import { emailValidResquester } from '@api'
import type { ReactElement } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

//필요없는 타입 수정
type EmailFormType = {
  email: string
  password: string
  pwCheck?: string
}

const EmailForm = (): ReactElement => {
  const defaultValues = {
    email: '',
    password: '',
    pwCheck: ''
  }
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    getValues,
    setError
  } = useForm<EmailFormType>({ defaultValues, mode: 'all' })

  const navigate = useNavigate()
  const onSubmit = async (userInfo: EmailFormType): Promise<void> => {
    try {
      if (isValid) {
        navigate('./profile', { state: userInfo })
      }
    } catch (error) {
      console.log(error)
    }
  }

  const emailUniqueCheck = async (): Promise<string | undefined> => {
    const message = await emailValidResquester(getValues('email'))

    return message === '사용 가능한 이메일 입니다.' ? undefined : message
  }
  console.log(errors)
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h3>reCOrd에 오신걸 환영해요</h3>
      <span>사용하실 회원 정보를 입력해주세요</span>
      <InputBox
        id="email"
        labelTitle="이메일"
        type="text"
        placeholder="자주 사용하는 이메일을 입력해주세요"
        register={register('email', {
          pattern: {
            message: '* 이메일 형식이 올바르지 않습니다.',
            value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
          },
          validate: emailUniqueCheck
        })}
        errorMsg={errors.email?.message}
      />
      <InputBox
        id="password"
        labelTitle="비밀번호"
        type="password"
        placeholder="6글자 이상 영문과 숫자를 조합해주세요"
        register={register('password', {
          pattern: {
            message: '6글자 이상 영문과 숫자를 조합해주세요',
            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/
          }
        })}
        errorMsg={errors.password?.message}
      />
      <InputBox
        id="pwCheck"
        labelTitle="비밀번호 확인"
        type="password"
        placeholder="한번 더 입력해주세요"
        register={register('pwCheck', {
          required: '비밀번호를 다시 확인해주세요',
          validate: () =>
            getValues('pwCheck') === getValues('password') ||
            '비밀번호가 일치하지 않습니다'
        })}
        errorMsg={errors.pwCheck?.message}
      />
      <Button disabled={!isValid && isSubmitting}>다음</Button>
    </Form>
  )
}

export default EmailForm

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 350px;
  padding: 30px 15px;
  border-radius: 8px;
  margin: 0 auto;
`
