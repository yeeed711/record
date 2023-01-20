import { defaultInstance } from './instance'
import { PATH } from '@data'

export const ProfileImageUploadResquster = async (
  imgFile: string
  // eslint-disable-next-line consistent-return
): Promise<any> => {
  const formData = new FormData()
  formData.append('image', imgFile)
  try {
    const response = await defaultInstance.post(PATH.IMAGEUPLOADFILE, formData)
    console.log(response, '이미지 인코딩 성공')
    return process.env.REACT_APP_API_BASE_URL + '/' + response.data.filename
  } catch (error) {
    console.log('프로필 이미지 업로드를 실패하였습니다.')
  }
}
