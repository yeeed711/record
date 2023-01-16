import { postCommentWriteResquester } from '@api'
import type { ReactElement } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'

type CommentFormPropsType = {
  postId: string
}

const CommentForm = ({ postId }: CommentFormPropsType): ReactElement => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { isValid }
  } = useForm()

  const onSubmit = async (): Promise<void> => {
    if (isValid) {
      await postCommentWriteResquester(postId, getValues('comment'))
      setValue('comment', '')
    }
  }

  console.log(getValues('comment'))

  return (
    <StyledContainer onSubmit={handleSubmit(onSubmit)}>
      <label className="ir" htmlFor="textarea">
        댓글 입력창
      </label>
      <Textarea
        id="textarea"
        placeholder="댓글을 작성해보세요."
        {...register('comment', {
          required: true
        })}
      />
      <CommentBtn disabled={!isValid}>댓글 작성</CommentBtn>
    </StyledContainer>
  )
}

export default CommentForm

const StyledContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const Textarea = styled.textarea`
  border: 1px solid ${props => props.theme.colors.border_01};
  border-radius: 5px;
  width: 100%;
  height: 100px;
  padding: 15px 10px;
  &:focus {
    border: 1px solid ${props => props.theme.colors.border_02};
    &::placeholder {
      color: ${props => props.theme.colors.text_02};
    }
  }
`
const CommentBtn = styled.button`
  background-color: ${props => props.theme.colors.background_03};
  padding: 10px 15px;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 700;
  width: 100px;
  color: ${props => props.theme.colors.text_03};
  align-self: flex-end;
  &:disabled {
    background-color: ${props => props.theme.colors.background_02};
    color: ${props => props.theme.colors.text_02};
    cursor: not-allowed;
  }
`
