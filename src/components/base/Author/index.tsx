import type { ReactElement } from 'react'
import styled from 'styled-components'

type AuthorPropsType = {
  src: string | undefined
  children: string
}

const Author = ({ src, children }: AuthorPropsType): ReactElement => {
  return (
    <StyledContainer>
      <ProfileImg src={src} alt="프로필 이미지" />
      <ProfileName>{children}</ProfileName>
    </StyledContainer>
  )
}

export default Author

const StyledContainer = styled.div`
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
  font-size: 13px;
  font-weight: 500;
  color: ${props => props.theme.colors.text_04};
  margin-top: 2px;
`
