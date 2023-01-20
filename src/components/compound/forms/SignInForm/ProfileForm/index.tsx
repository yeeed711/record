import { Button, InputBox } from '@base'
import { useEffect, useState } from 'react'
import { ICON } from '@data'
import { ProfileImageUploadResquster } from '@api'
import type { ReactElement } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { useLocation } from 'react-router-dom'

type StateType = {
  email: string
  password: string
}

type UserInfoType = {
  email?: string
  password?: string
  username: string
  accountname: string
  intro: string
  image: string
}

const ProfileForm = (): ReactElement => {
  const location = useLocation()
  const state = location.state as StateType
  const { email, password } = state

  const {
    register,
    handleSubmit,
    watch,
    getValues,
    setValue,
    formState: { errors, isValid }
  } = useForm<UserInfoType>({ mode: 'onChange' })

  const [defaultImg, setImg] = useState(null)

  const onSubmit = async (userInfo: UserInfoType): Promise<void> => {
    if (isValid) {
      console.log(userInfo)
    }
  }

  const avatar = watch('image')

  useEffect(() => {
    if (avatar && avatar.length > 0) {
      const file = avatar[0]
      const handle = async (): Promise<void> => {
        const res = await ProfileImageUploadResquster(file)
        setImg(res)
      }
      handle()
    }
  }, [avatar])
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <ImgBox>
        <ImgWrapper>
          {defaultImg ? null : <ICON.IMAGE />}
          <img
            src={defaultImg || './assets/icons/avatar.svg'}
            alt=""
            className={defaultImg ? '' : 'ir'}
          />
          <input
            type="file"
            id="image"
            accept=".jpg, .png, .jpeg"
            className="ir"
            {...register('image')}
          />
        </ImgWrapper>
        <ImageInfo>- 10MB 이하</ImageInfo>
        <ImageInfo>- 등록 가능 확장자: jpg, png, jpeg</ImageInfo>
      </ImgBox>
      <InputBox
        id="accountname"
        labelTitle="아이디"
        type="text"
        placeholder="2자 ~ 10자 영어, 숫자, (_), (.)만 사용 가능해요"
        register={register('accountname', {
          pattern: {
            message: '* 2자 ~ 10자 영어, 숫자, 밑줄, 마침표만 사용 가능해요',
            value: /^[a-zA-Z0-9_.]{2,10}$/
          },
          required: '* 필수 입력 사항입니다'
        })}
        errorMsg={errors.accountname?.message}
      />
      <InputBox
        id="username"
        labelTitle="닉네임"
        type="text"
        placeholder="자주 사용하는 닉네임을 입력해주세요"
        register={register('username', {
          required: '* 필수 입력 사항입니다'
        })}
        errorMsg={errors.accountname?.message}
      />
      <InputBox
        id="intro"
        labelTitle="소개"
        type="text"
        placeholder="간단히 본인을 소개해주세요"
        register={register('intro', {
          required: '* 필수 입력 사항입니다'
        })}
        errorMsg={errors.intro?.message}
      />
      <Button disabled={!isValid}>가입하기</Button>
    </Form>
  )
}

export default ProfileForm

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 350px;
  padding: 30px 15px;
  border-radius: 8px;
  margin: 0 auto;
`

const ImgBox = styled.div`
  margin: 0 auto;
`

const ImgWrapper = styled.label`
  overflow: hidden;
  width: 200px;
  height: 200px;
  border: 1px solid ${({ theme }) => theme.colors.border_01};
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  gap: 10px;
  cursor: pointer;
  img {
    display: block;
    margin: 0 auto;
  }
`

const ImageInfo = styled.span`
  color: ${props => props.theme.colors.text_05};
  font-size: 12px;
  display: block;
`
