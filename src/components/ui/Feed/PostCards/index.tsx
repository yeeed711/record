import { useEffect, useState } from 'react'
import { mobile } from '@styles'
import { PostCard } from '@components'
import type { PostsType } from '@models'
import type { ReactElement } from 'react'
import styled from 'styled-components'
import { userPostResquester } from '@api'

const PostCards = (): ReactElement => {
  const [userPosts, setUserPosts] = useState<PostsType>()

  useEffect(() => {
    const userPostData = async (): Promise<void> => {
      const { post } = await userPostResquester('yezboy')
      setUserPosts(post)
    }

    userPostData()
  }, [])

  return (
    <StyledContainer>
      {userPosts &&
        userPosts.map(post => <PostCard key={post.id} post={post} />)}
    </StyledContainer>
  )
}

export default PostCards

const StyledContainer = styled.ul`
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
